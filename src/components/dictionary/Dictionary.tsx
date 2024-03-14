import { FC } from 'react'
import { Button } from 'antd'
import s from './Dictionary.module.scss'

export const Dictionary: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <div className={s.title}>Слова уроку</div>
        <div className={s.divider} />
      </div>
      <div className={s.item}>
        <div className={s.buttonWrapper}>
          <div className={s.title}>Свої слова</div>
          <Button shape="circle" type="primary" style={{ width: '24px' }}>
            +
          </Button>
        </div>
        <div className={s.divider} />
      </div>
    </div>
  )
}
