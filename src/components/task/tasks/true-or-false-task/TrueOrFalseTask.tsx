/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import { PreparedTrueOrFalseTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { getColorCell, onValidText, useTaskContext } from 'components/task/utils'
import { onValidateTask } from './utils'
import s from './TrueOrFalseTask.module.scss'

interface TrueOrFalseTaskProps {
  onRepeat: () => void
}

export const TrueOrFalseTask: FC<TrueOrFalseTaskProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedTrueOrFalseTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedTrueOrFalseTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (data?.userAnswer || data?.userAnswer === false) {
      setDisableBtnStatus(false)
    } else {
      setDisableBtnStatus(true)
    }
  }, [data])

  const onClickAnswerBtn = (value: boolean) => {
    setCurrentData((prevState) => ({ ...prevState, userAnswer: value }))
  }

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

  return (
    <>
      <div className={s.question}>{data?.question}</div>
      <Button
        style={{
          width: '100%',
          marginBottom: '16px',
          backgroundColor: data?.userAnswer === true ? '#D5E8FF' : '',
          ...(!isTaskNotFinished && data?.userAnswer === true
            ? getColorCell(withCheck, [], '', statusValidation)
            : {}),
        }}
        onClick={() => onClickAnswerBtn(true)}>
        {data?.format === 'trueOrFalse' ? 'Правда' : 'Так'}
      </Button>
      <Button
        style={{
          width: '100%',
          marginBottom: '24px',
          backgroundColor: data?.userAnswer === false ? '#D5E8FF' : '',
          ...(!isTaskNotFinished && data?.userAnswer === false
            ? getColorCell(withCheck, [], '', statusValidation)
            : {}),
        }}
        onClick={() => onClickAnswerBtn(false)}>
        {data?.format === 'trueOrFalse' ? 'Неправда' : 'Ні'}
      </Button>
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
