import { FC, useState } from 'react'
import { Button, Divider } from 'antd'
import { AddWordModal, WordListItem } from './elements'
import s from './Dictionary.module.scss'

export const Dictionary: FC = () => {
  const [modalStatus, setModalStatus] = useState(false)

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.buttonWrapper}>
          <div className={s.title}>Слова уроку</div>
        </div>
        <Divider className={s.dividerMain} />
        <WordListItem word="hi" transcription="[haɪ]" translation="Приві́т" />
        <div className={s.buttonWrapper}>
          <div className={s.title}>Слова уроку</div>
          <Button
            shape="circle"
            type="primary"
            style={{ width: '24px' }}
            onClick={() => setModalStatus(true)}>
            +
          </Button>
        </div>
        <Divider className={s.dividerMain} />
        <WordListItem word="hi" transcription="[haɪ]" translation="Приві́т" />
      </div>

      <AddWordModal isModalOpen={modalStatus} closeModal={() => setModalStatus(false)} />
    </>
  )
}
