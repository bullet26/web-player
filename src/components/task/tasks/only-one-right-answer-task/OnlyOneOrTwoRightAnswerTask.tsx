/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import { PreparedOnlyOneRightAnswerTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, getColorCell, onValidText } from 'components/task/utils'
import { onValidateTask, onSubmitUpdateHTML, onMountUpdateHTML, onCleanHTML } from './utils'
import s from './OnlyOneOrTwoRightAnswerTask.module.scss'

interface OnlyOneOrTwoRightAnswerTaskProps {
  onRepeat: () => void
}

export const OnlyOneOrTwoRightAnswerTask: FC<OnlyOneOrTwoRightAnswerTaskProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const taskRef = useRef<HTMLDivElement>(null)

  const [data, setCurrentData] = useState(
    getData(difficultyLevel) as PreparedOnlyOneRightAnswerTask,
  )
  const [isTaskNotFinished, setTaskNotFinishStatus] = useState(true)
  const [disableBtn, setDisableBtnStatus] = useState(true)
  const [validateText, setValidateText] = useState('')
  const [validationArray, setValidationArray] = useState<string[]>([])
  const [statusValidation, setValidationStatus] = useState(true)

  useEffect(() => {
    setCurrentData(getData(difficultyLevel) as PreparedOnlyOneRightAnswerTask)
  }, [getData, difficultyLevel])

  useEffect(() => {
    if (!isTaskNotFinished && data) {
      // запустить только один раз при монтировании компонента, но после получения Data, не менять условие
      onMountUpdateHTML(withCheck, data, taskRef)
    }
    if (!!data?.chosenAnswerID && !!data?.chosenWords) {
      setDisableBtnStatus(false)
    } else {
      setDisableBtnStatus(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const onClickWordBtn = (itemID: string, word: string) => {
    if (!itemID || !isTaskNotFinished) {
      return
    }

    setCurrentData((prevState) => ({
      ...prevState,
      chosenAnswerID: itemID,
      chosenWords: word.split('/'),
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
    onSubmitUpdateHTML(validation, withCheck, data.chosenWords, status, taskRef)
  }

  const onRepeatTask = () => {
    setTaskNotFinishStatus(true)
    onRepeat()
    onCleanHTML(taskRef)
  }

  return (
    <>
      <div
        className={s.taskText}
        dangerouslySetInnerHTML={{ __html: data?.taskQuestion || '' }}
        ref={taskRef}
      />
      <div className={s.answerBlockWrapper}>
        {data?.formattedAnswers.map((item) => (
          <div className={s.answerInColumnGroupWrapper} key={item.id}>
            {item.value && (
              <Button
                type="default"
                shape="round"
                key={item.id}
                onClick={() => {
                  onClickWordBtn(item.id, item.value)
                }}
                style={
                  !isTaskNotFinished && data?.chosenAnswerID === item.id
                    ? getColorCell(withCheck, validationArray, item.id)
                    : {}
                }
                className={classNames({
                  [s.chosenWordBtn]: data?.chosenAnswerID === item.id,
                })}>
                {item.value}
              </Button>
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
