/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext } from 'react'
import { DifficultyLevel, PreparedTask } from 'types'

export const TaskContext = createContext<{
  isOneDifficultyLevel: boolean
  withCheck: boolean
  passAgain: boolean
  randomPlacement: boolean
  difficultyLevel: DifficultyLevel
  setDifficultyLevel: (_value: DifficultyLevel) => void
  setData: (_value: PreparedTask, _difficultyLevel: DifficultyLevel) => void
  getData: (_difficultyLevel: DifficultyLevel) => PreparedTask | null
}>({
  isOneDifficultyLevel: false,
  withCheck: false,
  passAgain: false,
  randomPlacement: false,
  difficultyLevel: 'easy',
  setDifficultyLevel: (_value: DifficultyLevel) => {},
  setData: (_value: PreparedTask, _difficultyLevel: DifficultyLevel) => {},
  getData: (_difficultyLevel: DifficultyLevel) => {
    return null
  },
})

export const useTaskContext = () => useContext(TaskContext)
