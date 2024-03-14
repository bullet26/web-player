import { CompareTaskText, PreparedCompareTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedCompareTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedCompareTask => {
  if (!task || !Object.hasOwn(task, 'wordPairs')) {
    return { leftWords: [], rightWords: [], comparedRightWords: {} }
  }

  const data = task as CompareTaskText

  const leftWords = data.wordPairs.map((item) => ({
    id: item.id,
    word: item.left,
  }))

  const newRightWords = data.wordPairs.map((item) => ({
    id: item.id,
    word: item.right,
  }))
  const rightWords = randomPlacement ? randomSortArray(newRightWords) : newRightWords

  return { leftWords, rightWords, comparedRightWords: {} }
}
