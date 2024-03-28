import { FC } from 'react'
import { Popover, Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { NoteIcon } from 'assets'
import { LessonTab, GeneralTab } from './elements'
import s from './Notebook.module.scss'

export const Notebook: FC = () => {
  const items: TabsProps['items'] = [
    {
      key: 'lesson',
      label: 'Урок',
      children: <LessonTab />,
    },
    {
      key: 'general',
      label: 'Загальні',
      children: <GeneralTab />,
    },
  ]

  return (
    <Popover
      content={
        <div className="notation">
          <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: 'black' }} />
        </div>
      }
      title="Нотатки"
      placement="bottomRight"
      trigger="click">
      <div className={s.noteIcon}>
        <NoteIcon />
      </div>
    </Popover>
  )
}
