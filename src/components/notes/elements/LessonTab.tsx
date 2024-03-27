import { FC } from 'react'
import { Input } from 'antd'
import { NoteItem } from './NoteItem'

export const LessonTab: FC = () => {
  return (
    <>
      <Input placeholder="Написати нотатку до уроку" variant="borderless" />
      <NoteItem body="Переглянути додаткові матеріали урок 3" />
      <NoteItem body="Переглянути додаткові матеріали урок 3" />
    </>
  )
}
