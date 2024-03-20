import { SortDialogueTaskText, PreparedSortDialogueTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedSortDialogueTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedSortDialogueTask => {
  if (!task || !Object.hasOwn(task, 'sentences')) {
    return { correctOrderSentences: [], compareSentences: [] }
  }

  const data = task as SortDialogueTaskText
  const { sentences } = data

  const compareSentences = randomPlacement ? randomSortArray([...sentences]) : sentences

  return { correctOrderSentences: sentences, compareSentences }
}
