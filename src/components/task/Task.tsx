/* eslint-disable react/jsx-no-constructed-context-values */
import { FC, useState } from 'react'
import { TaskType, Type, DifficultyLevel, PreparedTask } from 'types'
import { DifficultyLevelTab } from 'components'
import { TaskContext } from 'components/task/utils'
import { TaskChooseBlock } from './TaskChooseBlock'
import s from './Task.module.scss'

interface TaskProps {
  type: Type
  data?: TaskType
}
export const Task: FC<TaskProps> = (props) => {
  const { type, data } = props
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('easy')
  const [dataEasyLevel, setDataEasyLevel] = useState<PreparedTask | null>(null)
  const [dataMidLevel, setDataMidLevel] = useState<PreparedTask | null>(null)
  const [dataHardLevel, setDataHardLevel] = useState<PreparedTask | null>(null)
  const isOneDifficultyLevel = data?.parameters.includes('oneDifficultyLevel') ?? false
  const withCheck = data?.parameters.includes('withCheck') ?? false
  const passAgain = data?.parameters.includes('passAgain') ?? false
  const randomPlacement = data?.parameters.includes('randomPlacement') ?? false

  const setData = (value: PreparedTask, _difficultyLevel: DifficultyLevel) => {
    if (_difficultyLevel === 'easy') {
      setDataEasyLevel(value)
    } else if (_difficultyLevel === 'middle') {
      setDataMidLevel(value)
    } else if (_difficultyLevel === 'hard') {
      setDataHardLevel(value)
    }
  }

  const getData = (_difficultyLevel: DifficultyLevel) => {
    if (_difficultyLevel === 'easy') {
      return dataEasyLevel
    }
    if (_difficultyLevel === 'middle') {
      return dataMidLevel
    }
    if (_difficultyLevel === 'hard') {
      return dataHardLevel
    }
    return null
  }

  return (
    <TaskContext.Provider
      value={{
        difficultyLevel,
        setDifficultyLevel,
        isOneDifficultyLevel,
        withCheck,
        passAgain,
        randomPlacement,
        setData,
        getData,
      }}>
      <div className={s.wrapper}>
        <div className={s.outerWrapper}>
          <div className={s.innerWrapper}>
            <div className={s.title}>
              <span className={s.titleBlue}>Завдання:</span>
              <span> {data?.title}</span>
            </div>
            <div className={s.subtitle}>{data?.description}</div>
          </div>
          {!isOneDifficultyLevel && (
            <DifficultyLevelTab childrenOption={<TaskChooseBlock type={type} data={data} />} />
          )}
        </div>
      </div>
    </TaskContext.Provider>
  )
}
