import { RightAnswerTaskText, PreparedRightAnswerTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedRightAnswerTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedRightAnswerTask => {
  if (!task || !Object.hasOwn(task, 'taskQuestion') || !Object.hasOwn(task, 'taskAnswers')) {
    return { taskQuestion: '', taskAnswers: [], taskCorrectAnswerIDs: {}, chosenAnswerIDs: {} }
  }

  const data = task as RightAnswerTaskText

  const { taskQuestion, taskAnswers: taskAnswersInit } = data

  let taskAnswers = taskAnswersInit

  if (randomPlacement) {
    taskAnswers = taskAnswersInit.map((item) => ({
      ...item,
      answers: randomSortArray([...item.answers]),
    }))
  }

  const taskCorrectAnswerIDs: { [x: string]: string } = {}

  data.taskAnswers.forEach((item) => {
    const correctAnswerID = item.answers.find((subitem) => subitem.type === 'correct')?.id || ''

    taskCorrectAnswerIDs[item.id] = correctAnswerID
  })

  return { taskQuestion, taskAnswers, taskCorrectAnswerIDs, chosenAnswerIDs: {} }
}
