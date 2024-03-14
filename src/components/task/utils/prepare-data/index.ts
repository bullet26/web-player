import { DifficultyLevel, TaskType, Type, PreparedTask } from 'types'
import { preparedCompareTask } from './compare-task'
import { preparedCategorizeTask } from './categorize-task'

export const preparedTaskData = (
  type: Type,
  difficultyLevel: DifficultyLevel,
  randomPlacement: boolean,
  data?: TaskType,
): PreparedTask | null => {
  if (!data) {
    return null
  }
  const currentData = data.taskText.find((item) => item.difficultyLevel === difficultyLevel) || null

  if (type === 'compareTask') {
    return preparedCompareTask(currentData, randomPlacement)
  }
  if (type === 'categorizeTask') {
    return preparedCategorizeTask(currentData, randomPlacement)
  }
  return null
}
