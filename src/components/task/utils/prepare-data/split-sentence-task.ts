import { TaskTextWithoutAnswer, PreparedSplitSentenceTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedSplitSentenceTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedSplitSentenceTask => {
  if (!task || !Object.hasOwn(task, 'taskQuestion')) {
    return { correctOrderSentence: [], compareSentence: [], initialSentence: [] }
  }

  const data = task as TaskTextWithoutAnswer

  const correctOrderSentence = data.taskQuestion.split(' ')

  const initialSentence = randomPlacement
    ? randomSortArray([...correctOrderSentence])
    : correctOrderSentence

  return { correctOrderSentence, initialSentence, compareSentence: [] }
}
