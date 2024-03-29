/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-danger */
import { FC, useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import classNames from 'classnames'
import { PreparedRightAnswerTask } from 'types'
import { ButtonBlock } from 'components/task/elements'
import { useTaskContext, getColorCell, onValidText } from 'components/task/utils'
import { onValidateTask, onSubmitUpdateHTML, onMountUpdateHTML, onCleanHTML } from './utils'
import s from './RightAnswerTask.module.scss'

interface RightAnswerViewProps {
  onRepeat: () => void
}

export const RightAnswerTask: FC<RightAnswerViewProps> = (props) => {
  const { withCheck, difficultyLevel, setData, getData } = useTaskContext()
  const { onRepeat } = props

  const taskRef = useRef<HTMLDivElement>(null)

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
    if (!isTaskNotFinished && data) {
      // запустить только один раз при монтировании компонента, но после получения Data, не менять условие
      onMountUpdateHTML(withCheck, data, taskRef)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const onClickWordBtn = (groupID: string, itemID: string, word: string) => {
    if (!groupID || !itemID || !isTaskNotFinished) {
      return
    }

    const index = data.taskAnswers.findIndex((item) => item.id === groupID)

    setCurrentData((prevState) => ({
      ...prevState,
      taskCorrectAnswerIDs: prevState.taskCorrectAnswerIDs,
      chosenAnswerIDs: { ...prevState.chosenAnswerIDs, [groupID]: itemID },
      chosenWords: prevState.chosenWords.toSpliced(index, 1, word),
    }))
  }

  const onSubmitTask = () => {
    const { status, validationBlockIds, validationItemIds } = onValidateTask(data)
    const text = onValidText(status, withCheck)
    !!data && setData(data, difficultyLevel)

    setValidationStatus(status)
    setValidationArray(validationItemIds)
    setValidateText(text)
    setTaskNotFinishStatus(false)
    onSubmitUpdateHTML(validationBlockIds, withCheck, data.chosenWords, taskRef)
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
                      onClickWordBtn(item.id, subitem.id, subitem.value)
                    }}
                    style={
                      !isTaskNotFinished && data?.chosenAnswerIDs[item.id] === subitem.id
                        ? getColorCell(withCheck, validationArray, subitem.id)
                        : {}
                    }
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
