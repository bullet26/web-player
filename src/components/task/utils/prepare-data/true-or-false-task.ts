import { TrueOrFalseTaskText, PreparedTrueOrFalseTask, TaskTypeOneItem } from 'types'

export const preparedTrueOrFalseTask = (task: TaskTypeOneItem | null): PreparedTrueOrFalseTask => {
  if (!task || !Object.hasOwn(task, 'taskItemData')) {
    return { id: '', format: 'trueOrFalse', question: '', answer: true, userAnswer: false }
  }

  const data = task as TrueOrFalseTaskText

  const { id, format, question, answer } = data.taskItemData

  return { id, format, question, answer, userAnswer: null }
}
