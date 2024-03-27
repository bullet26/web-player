import { FC } from 'react'
import { Input } from 'antd'
import { NoteItem } from './NoteItem'

export const GeneralTab: FC = () => {
  return (
    <>
      <Input placeholder="Написати нотатку" variant="borderless" />
      <NoteItem date="10.10.2024 - Урок 3" body="Переглянути додаткові матеріали урок 3" />
      <NoteItem date="10.10.2024 - Урок 3" body="Переглянути додаткові матеріали урок 3" />
    </>
  )
}
