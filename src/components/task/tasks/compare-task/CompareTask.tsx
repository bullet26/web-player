/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState } from 'react'
import { DnDItemTypes, PreparedCompareTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, getColorCell, onValidText } from 'components/task/utils'
import { DragWordItem, DropCellItem } from './elements'
import { onValidateTask } from './utils'
import s from './CompareTask.module.scss'

interface CompareTaskProps {
  onRepeat: () => void
}

export const CompareTask: FC<CompareTaskProps> = (props) => {
  const dragType = DnDItemTypes.COMPARE

  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedCompareTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidationArray] = useState<string[]>([])
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedCompareTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (
      Object.keys(data?.comparedRightWords || {}).length === data?.leftWords.length &&
      !!data?.leftWords.length &&
      !data?.rightWords?.length
    ) {
      setDisableBtnStatus(false)
    } else if (data?.rightWords?.length) {
      setDisableBtnStatus(true)
    }
  }, [data])

  const dropEnd = (
    dragItem: { id: string; word: string },
    dropItem: { dropEffect: string; index: number } | null,
  ) => {
    if (!dropItem || !dragItem || !data) {
      return
    }

    setCurrentData((prevState) => ({
      rightWords: prevState?.rightWords.filter((item) => item.id !== dragItem.id) ?? [],
      leftWords: prevState?.leftWords ?? [],
      comparedRightWords: {
        ...prevState?.comparedRightWords,
        [dropItem.index.toString()]: {
          id: dragItem.id,
          word: dragItem.word,
        },
      },
    }))
  }

  const onClickDropCell = (index: number, word?: string) => {
    const id = data?.comparedRightWords[index].id

    if (!isTaskNotFinished || !word || !id) {
      return
    }

    setCurrentData((prevState) => ({
      rightWords: [...(prevState?.rightWords ?? []), { id, word }],
      leftWords: prevState?.leftWords ?? [],
      comparedRightWords: {
        ...prevState?.comparedRightWords,
        [index]: {},
      },
    }))
  }

  const onSubmitTask = () => {
    const { status, validation } = onValidateTask(data)
    const text = onValidText(status, withCheck)
    !!data && setData(data, difficultyLevel)
    setValidationStatus(status)
    setValidationArray(validation)
    setValidateText(text)
    setTaskNotFinishStatus(false)
  }

  const onRepeatTask = () => {
    setTaskNotFinishStatus(true)
    onRepeat()
  }

  return (
    <div>
      {data?.leftWords.map((item, i) => (
        <div key={item.id} className={s.compareTaskGroupItem}>
          <div className={s.leftPart}>{item.word}</div>
          <span>-</span>
          <DropCellItem
            index={i}
            dragType={dragType}
            word={data?.comparedRightWords[i.toString()]?.word}
            style={isTaskNotFinished ? {} : getColorCell(withCheck, validationArray, item.id)}
            onClickCell={onClickDropCell}
          />
        </div>
      ))}
      {!!data?.rightWords.length && (
        <div className={s.rightPartWordsWrapper}>
          {data?.rightWords.map((item) => (
            <DragWordItem dragType={dragType} {...item} key={item.id} dropEndFn={dropEnd} />
          ))}
        </div>
      )}
      <ButtonBlock
        showBtn={isTaskNotFinished}
        disableBtn={disableBtn}
        statusCheck={statusValidation}
        validateText={validateText}
        onSubmitTask={onSubmitTask}
        onRepeatTask={onRepeatTask}
      />
    </div>
  )
}
