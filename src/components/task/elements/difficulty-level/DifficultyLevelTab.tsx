import { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { useTaskContext } from 'components/task/utils'
import s from './DifficultyLevelTab.module.scss'

interface DifficultyLevelTabProps {
  childrenOption: ReactNode
  destroyInactiveTabPane: boolean
}

export const DifficultyLevelTab: FC<DifficultyLevelTabProps> = (props) => {
  const { childrenOption, destroyInactiveTabPane = false } = props
  const { difficultyLevel, setDifficultyLevel } = useTaskContext()

  const items: TabsProps['items'] = [
    {
      key: 'easy',
      label: <span>Легкий</span>,
      children: childrenOption,
    },
    {
      key: 'middle',
      label: <span>Середній</span>,
      children: childrenOption,
    },
    {
      key: 'hard',
      label: <span>Складний</span>,
      children: childrenOption,
    },
  ]

  const onChange = (key: string) => {
    if (key === 'easy' || key === 'middle' || key === 'hard') {
      setDifficultyLevel(key)
    } else {
      console.log(key, 'difficultyLevel')
    }
  }

  return (
    <div className="difficultyLevel">
      <div className={s.label}>Рівень складності поточного завдання</div>
      <Tabs
        destroyInactiveTabPane={destroyInactiveTabPane}
        defaultActiveKey="1"
        activeKey={difficultyLevel}
        items={items}
        tabBarStyle={{ color: 'black' }}
        onChange={(key: string) => onChange(key)}
      />
    </div>
  )
}
