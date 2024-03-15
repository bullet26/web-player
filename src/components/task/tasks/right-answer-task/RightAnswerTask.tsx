/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import { PreparedRightAnswerTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, getColorCell, onValidText } from 'components/task/utils'
import { onValidateTask } from './utils'
import s from './RightAnswerTask.module.scss'

interface RightAnswerViewProps {
  onRepeat: () => void
}

export const RightAnswerTask: FC<RightAnswerViewProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const [data, setCurrentData] = useState(getData(difficultyLevel) as PreparedRightAnswerTask)
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidationArray] = useState<string[]>([])
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedRightAnswerTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
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

  const onClickWordBtn = (groupID: string, itemID: string) => {
    if (!groupID || !itemID) {
      return
    }
    setCurrentData((prevState) => ({
      taskQuestion: prevState.taskQuestion,
      taskAnswers: prevState.taskAnswers,
      taskCorrectAnswerIDs: prevState.taskCorrectAnswerIDs,
      chosenAnswerIDs: { ...prevState.chosenAnswerIDs, [groupID]: itemID },
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
    <>
      <div className={s.taskText} dangerouslySetInnerHTML={{ __html: data?.taskQuestion || '' }} />
      <div className={s.answerBlockWrapper}>
        {data?.taskAnswers.map((item) => (
          <div className={s.answerGroupWrapper} key={item.id}>
            {item.answers.map(
              (subitem) =>
                subitem.value && (
                  <Button
                    type="default"
                    shape="round"
                    key={subitem.id}
                    onClick={() => {
                      onClickWordBtn(item.id, subitem.id)
                    }}
                    className={classNames({
                      [s.chosenWordBtn]: data?.chosenAnswerIDs[item.id] === subitem.id,
                    })}>
                    {subitem.value}
                  </Button>
                ),
            )}
          </div>
        ))}
      </div>
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
