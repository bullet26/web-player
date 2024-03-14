/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect, useState } from 'react'
import { DnDItemTypes, PreparedCategorizeTask } from 'types'
import { useTaskContext, onValidText, getColorText } from 'components/task/utils'
import { ButtonBlock } from 'components/task/elements'
import { onValidateTask } from './utils'
import { DragWordItem, DropCellItem } from './elements'
import s from './CategorizeTaskView.module.scss'

interface CategorizeTaskProps {
  onRepeat: () => void
}

export const CategorizeTask: FC<CategorizeTaskProps> = (props) => {
  const dragType = DnDItemTypes.CATEGORIZE

  const { onRepeat } = props
  const { withCheck, difficultyLevel, setData, getData, randomPlacement } = useTaskContext()

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedCategorizeTask)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [showBtn, setShowBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidation] = useState<string[]>([])
  const [statusCheck, setStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedCategorizeTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (!data?.otherWords?.length && !!Object.keys(data?.comparedWordsGroup || {}).length) {
      setDisableBtnStatus(false)
    } else if (data?.otherWords?.length) {
      setDisableBtnStatus(true)
    }
  }, [data])

  const dropEndFn = (
    dragItem: { id: string; word: string; groupNumber: number | null },
    dropItem: { dropEffect: string; index: string } | null,
  ) => {
    if (!dropItem || !dragItem || !data) {
      return
    }

    setCurrentData((prevState) => ({
      mainWords: prevState.mainWords,
      otherWords: prevState.otherWords.filter((item) => item.id !== dragItem.id),
      rowCount: prevState.rowCount,
      correctWordsGroup: prevState.correctWordsGroup,
      comparedWordsGroup: {
        ...prevState.comparedWordsGroup,
        [dropItem.index]: {
          words: [
            ...prevState.comparedWordsGroup[dropItem.index].words,
            {
              id: dragItem.id,
              word: dragItem.word,
              groupNumber: dragItem.groupNumber,
            },
          ],
        },
      },
    }))
  }
  const onClickWordItem = (
    index: string,
    itemID: string,
    word: string,
    groupNumber: number | null,
  ) => {
    if (!showBtn || !index || !itemID) {
      return
    }

    setCurrentData((prevState) => ({
      mainWords: prevState.mainWords,
      otherWords: [...prevState.otherWords, { id: itemID, word, groupNumber }],
      rowCount: prevState.rowCount,
      correctWordsGroup: prevState.correctWordsGroup,
      comparedWordsGroup: {
        ...prevState.comparedWordsGroup,
        [index]: {
          words: prevState.comparedWordsGroup[index].words.filter((item) => item.id !== itemID),
        },
      },
    }))
  }

  const styleItemWord = (id: string) =>
    showBtn ? {} : getColorText(withCheck, validationArray, id)

  const onSubmitTask = () => {
    const { status, validation } = onValidateTask(data)
    const text = onValidText(status, withCheck)
    !!data && setData(data, difficultyLevel)
    setStatus(status)
    setValidation(validation)
    setValidateText(text)
    setShowBtnStatus(false)
  }
  const onRepeatTask = () => {
    setShowBtnStatus(true)
    onRepeat()
  }

  return (
    <div>
      <div className={s.groupWrapper}>
        {data?.mainWords.map((item) => (
          <DropCellItem
            key={item.id}
            dragType={dragType}
            onClickWordItem={onClickWordItem}
            index={item.id}
            word={item.word}
            styleItemWord={styleItemWord}
            otherWords={data.comparedWordsGroup[item.id].words}
          />
        ))}
      </div>
      {!!data?.otherWords.length && (
        <div
          className={s.wordsWrapper}
          style={{
            gridTemplateColumns: `repeat(${data?.mainWords.length}, minmax(150px, 1fr))`,
            gridTemplateRows: `repeat(${randomPlacement ? 'auto-fit' : data?.rowCount},  minmax(44px, auto))`,
            gridAutoFlow: `${randomPlacement ? 'row' : 'column'}`,
          }}>
          {data?.otherWords.map((item) => (
            <DragWordItem key={item.id} {...item} dragType={dragType} dropEndFn={dropEndFn} />
          ))}
        </div>
      )}
      <ButtonBlock
        showBtn={showBtn}
        disableBtn={disableBtn}
        statusCheck={statusCheck}
        validateText={validateText}
        onSubmitTask={onSubmitTask}
        onRepeatTask={onRepeatTask}
      />
    </div>
  )
}
