import { FC } from 'react'
import { Button } from 'antd'
import { ReplayIcon } from 'assets'
import { useTaskContext } from 'components/task/utils'
import s from './ButtonBlock.module.scss'

interface ButtonBlockProps {
  showBtn: boolean
  disableBtn: boolean
  statusCheck: boolean
  validateText: string
  onSubmitTask: () => void
  onRepeatTask: () => void
}

export const ButtonBlock: FC<ButtonBlockProps> = (props) => {
  const { showBtn, disableBtn, onSubmitTask, statusCheck, validateText, onRepeatTask } = props
  const { withCheck, passAgain } = useTaskContext()

  return showBtn ? (
    <Button
      type="primary"
      shape="round"
      style={{ width: '100%' }}
      disabled={disableBtn}
      onClick={onSubmitTask}
      className={s.mainButton}>
      {withCheck ? 'Перевірити' : 'Відповісти'}
    </Button>
  ) : (
    <>
      <div
        className={s.validateText}
        style={{ color: `${!statusCheck && withCheck ? 'red' : ''}` }}>
        {validateText}
      </div>
      {passAgain && !statusCheck && withCheck && (
        <Button
          type="primary"
          shape="round"
          style={{ width: '100%', marginTop: '24px' }}
          className={s.mainButton}
          onClick={onRepeatTask}>
          <span>Пройти повторно</span> <ReplayIcon />
        </Button>
      )}
    </>
  )
}
