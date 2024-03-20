/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect, useState } from 'react'
import { DnDItemTypes, PreparedSortDialogueTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, getColorBorder, onValidText } from 'components/task/utils'
import { DragAndDropItem } from './elements'
import { onValidateTask } from './utils'
import s from './SortDialogueTaskView.module.scss'

interface SortDialogueTaskProps {
  onRepeat: () => void
}

export const SortDialogueTask: FC<SortDialogueTaskProps> = (props) => {
  const dragType = DnDItemTypes.SORT_DIALOGUE

  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedSortDialogueTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidationArray] = useState<string[]>([])
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedSortDialogueTask)
  }, [getData, difficultyLevel])

  const movePhraseInDialogue = (dragIndex: number, hoverIndex: number) => {
    const draggedPhrase = data.compareSentences[dragIndex]

    setCurrentData((prevState) => ({
      ...prevState,
      compareSentences: prevState.compareSentences
        .toSpliced(dragIndex, 1)
        .toSpliced(hoverIndex, 0, draggedPhrase),
    }))
  }

  const styleItem = (id: string) => {
    return isTaskNotFinished ? {} : getColorBorder(withCheck, validationArray, id)
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
    <>
      <div className={s.wrapper}>
        {data?.compareSentences.map((item, i) => (
          <DragAndDropItem
            isAllowDnD={isTaskNotFinished}
            key={item.id}
            index={i}
            dragType={dragType}
            {...item}
            styleItem={styleItem}
            movePhraseInDialogue={movePhraseInDialogue}
          />
        ))}
      </div>
      <ButtonBlock
        showBtn={isTaskNotFinished}
        disableBtn={false}
        statusCheck={statusValidation}
        validateText={validateText}
        onSubmitTask={onSubmitTask}
        onRepeatTask={onRepeatTask}
      />
    </>
  )
}
