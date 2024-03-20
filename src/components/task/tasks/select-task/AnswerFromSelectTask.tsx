/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState, useRef, ChangeEvent } from 'react'
import { PreparedAnswerFromSelectTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, onValidText } from 'components/task/utils'
import { onCleanHTML, onMountUpdateHTML, onSubmitUpdateHTML, onValidateTask } from './utils'
import s from './AnswerFromSelectView.module.scss'

interface AnswerFromSelectProps {
  onRepeat: () => void
}

export const AnswerFromSelectTask: FC<AnswerFromSelectProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const taskRef = useRef<HTMLDivElement>(null)

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedAnswerFromSelectTask)
  const [isDataMount, setDataMountStatus] = useState(false)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    isDataMount && setDataMountStatus(false) // fix for activate useEffect
    setCurrentData(getData(difficultyLevel) as PreparedAnswerFromSelectTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (!isDataMount) {
      // fix activate addEventListener for select after data mounted, DO NOT CHANGE
      return undefined
    }
    const handleSelectChange = (e: Event) => {
      const targetEvent = (e as unknown as ChangeEvent<HTMLSelectElement>).target

      const itemID = targetEvent?.selectedOptions[0]?.id
      const groupID = targetEvent.getAttribute('id')

      if (!itemID || !groupID) {
        return
      }

      setCurrentData((prevState) => ({
        ...prevState,
        chosenAnswerIDs: { ...prevState.chosenAnswerIDs, [groupID]: itemID },
      }))
    }

    const selectElements = taskRef.current?.querySelectorAll('select')
    if (selectElements) {
      selectElements.forEach((item) => item.addEventListener('change', handleSelectChange))
    }

    return () => {
      if (selectElements) {
        selectElements.forEach((item) => item.removeEventListener('change', handleSelectChange))
      }
    }
  }, [isDataMount])

  useEffect(() => {
    if (!isTaskNotFinished && data) {
      // запустить только один раз при монтировании компонента, но после получения Data, не менять условие
      onMountUpdateHTML(withCheck, data, taskRef)
    }
    if (data && !!Object.keys(data).length) {
      setDataMountStatus(true)
    }
    if (
      !!data?.chosenAnswerIDs &&
      !!Object.keys(data?.chosenAnswerIDs).length &&
      Object.keys(data?.chosenAnswerIDs).length === Object.keys(data.taskCorrectAnswerIDs).length
    ) {
      setDisableBtnStatus(false)
    } else {
      setDisableBtnStatus(true)
    }
  }, [data])

  const onSubmitTask = () => {
    const { status, validation } = onValidateTask(data)
    const text = onValidText(status, withCheck)
    !!data && setData(data, difficultyLevel)

    setValidationStatus(status)
    setValidateText(text)
    setTaskNotFinishStatus(false)
    onSubmitUpdateHTML(validation, withCheck, taskRef)
    setDataMountStatus(false) // fix for activate useEffect
  }

  const onRepeatTask = () => {
    setTaskNotFinishStatus(true)
    isDataMount && setDataMountStatus(false) // fix for activate useEffect
    onRepeat()
    onCleanHTML(taskRef)
  }

  return (
    <>
      <div
        className={s.taskText}
        dangerouslySetInnerHTML={{ __html: data?.taskHTMLContent || '' }}
        ref={taskRef}
      />
      <ButtonBlock
        showBtn={isTaskNotFinished}
        disableBtn={disableBtn}
        statusCheck={statusValidation}
        validateText={validateText}
        onSubmitTask={onSubmitTask}
        onRepeatTask={onRepeatTask}
      />
    </>
  )
}
