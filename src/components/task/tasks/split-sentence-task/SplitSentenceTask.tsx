/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react'
import { Button, Divider } from 'antd'
import { PreparedSplitSentenceTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { getColorBorder, onValidText, useTaskContext } from 'components/task/utils'
import s from './SplitSentenceTask.module.scss'
import { onValidateTask } from './utils'

interface SplitSentenceTaskProps {
  onRepeat: () => void
}

export const SplitSentenceTask: FC<SplitSentenceTaskProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedSplitSentenceTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidationArray] = useState<string[]>([])
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedSplitSentenceTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (!data?.initialSentence.length && !!data?.compareSentence.length) {
      setDisableBtnStatus(false)
    } else {
      setDisableBtnStatus(true)
    }
  }, [data])

  const onRepeatTask = () => {
    setTaskNotFinishStatus(true)
    onRepeat()
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

  const onClickInInitialWordBtn = (index: number, word: string) => {
    setCurrentData((prevState) => ({
      ...prevState,
      compareSentence: [...prevState.compareSentence, word],
      initialSentence: prevState.initialSentence.toSpliced(index, 1),
    }))
  }

  const onClickCompareWordBtn = (index: number, word: string) => {
    if (!isTaskNotFinished) {
      return
    }
    setCurrentData((prevState) => ({
      ...prevState,
      compareSentence: prevState.compareSentence.toSpliced(index, 1),
      initialSentence: [...prevState.initialSentence, word],
    }))
  }

  return (
    <div className={s.taskTextAloneBlock}>
      {data?.compareSentence.map((item, i) => (
        <Button
          key={i}
          className={s.buttonWord}
          style={isTaskNotFinished ? {} : getColorBorder(withCheck, validationArray, i.toString())}
          onClick={() => onClickCompareWordBtn(i, item)}>
          {item}
        </Button>
      ))}
      <Divider style={{ marginTop: '8px' }} />
      {data?.initialSentence?.map((item, i) => (
        <Button
          key={i}
          className={s.buttonWordBlue}
          onClick={() => onClickInInitialWordBtn(i, item)}>
          {item}
        </Button>
      ))}
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
