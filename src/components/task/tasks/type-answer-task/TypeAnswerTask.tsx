/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState, useRef, ChangeEvent } from 'react'
import { PreparedTypeAnswerInput } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, onValidText } from 'components/task/utils'
import { onCleanHTML, onMountUpdateHTML, onSubmitUpdateHTML, onValidateTask } from './utils'
import s from './TypeAnswerTask.module.scss'

interface TypeAnswerTaskProps {
  onRepeat: () => void
}

export const TypeAnswerTask: FC<TypeAnswerTaskProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const taskRef = useRef<HTMLDivElement>(null)

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedTypeAnswerInput)
  const [isDataMount, setDataMountStatus] = useState(false)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    isDataMount && setDataMountStatus(false) // fix for activate useEffect
    setCurrentData(getData(difficultyLevel) as PreparedTypeAnswerInput)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (!isDataMount) {
      // fix activate addEventListener for select after data mounted, DO NOT CHANGE
      return undefined
    }
    const handleInputChange = (e: Event) => {
      const targetEvent = (e as unknown as ChangeEvent<HTMLSelectElement>).target

      const groupID = targetEvent.getAttribute('id')
      const { value } = targetEvent

      if (!groupID) {
        return
      }

      setCurrentData((prevState) => ({
        ...prevState,
        typingWords: { ...prevState.typingWords, [groupID]: value },
      }))
    }

    const inputElements = taskRef.current?.querySelectorAll('input')
    if (inputElements) {
      inputElements.forEach((item) => item.addEventListener('input', handleInputChange))
    }

    return () => {
      if (inputElements) {
        inputElements.forEach((item) => item.removeEventListener('input', handleInputChange))
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
      !!data?.typingWords &&
      !!Object.keys(data.typingWords).length &&
      Object.keys(data.typingWords).length === Object.keys(data.taskCorrectAnswerWords).length &&
      Object.values(data.typingWords).every((item) => !!item)
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
        className={s.taskTextAloneBlock}
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
