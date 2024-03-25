/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import { FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { PreparedCorrectMistakesTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { getColorBorder, onValidText, useTaskContext } from 'components/task/utils'
import { onValidateTask } from './utils'
import s from './CorrectMistakesTaskView.module.scss'

interface CorrectMistakesTaskProps {
  onRepeat: () => void
}

export const CorrectMistakesTask: FC<CorrectMistakesTaskProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const { TextArea } = Input

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedCorrectMistakesTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedCorrectMistakesTask)
  }, [getData, difficultyLevel])

  const onRepeatTask = () => {
    setTaskNotFinishStatus(true)
    onRepeat()
  }

  const onSubmitTask = () => {
    const { status } = onValidateTask(data)
    const text = onValidText(status, withCheck)
    !!data && setData(data, difficultyLevel)
    setValidationStatus(status)
    setValidateText(text)
    setTaskNotFinishStatus(false)
  }

  const onChange = (value: string) => {
    setCurrentData((prevState) => ({ ...prevState, compareSentence: value }))
  }

  return (
    <>
      <TextArea
        className={s.input}
        value={data?.compareSentence}
        onChange={(e) => onChange(e.target.value)}
        autoSize
        style={isTaskNotFinished ? {} : getColorBorder(withCheck, [], '', statusValidation)}
      />
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
