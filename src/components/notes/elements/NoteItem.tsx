import { FC } from 'react'
import s from '../Notebook.module.scss'

interface NoteItemPRops {
  date?: string
  body: string
}

export const NoteItem: FC<NoteItemPRops> = (props) => {
  const { date, body } = props
  return (
    <div className={s.noteItem}>
      {date && <div className={s.date}>{date}</div>}
      <div className={s.body}>{body}</div>
    </div>
  )
}
