import { FC } from 'react'
import { Divider } from 'antd'
import s from '../Dictionary.module.scss'

interface WordListItemProps {
  word: string
  transcription: string
  translation: string
}

export const WordListItem: FC<WordListItemProps> = (props) => {
  const { word, transcription, translation } = props
  return (
    <>
      <div className={s.word}>
        <span>{word}</span> <span>{transcription}</span>
      </div>
      <div className={s.translationWord}>{translation}</div>
      <Divider style={{ margin: '5px 0' }} />
    </>
  )
}
