import {
  RightAnswerTaskText,
  PreparedOnlyOneRightAnswerTask,
  TaskTypeOneItem,
  RightAnswerTaskItem,
} from 'types'
import { randomSortArray } from 'utils'

export const preparedOnlyOneOrTwoRightAnswerTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
) => {
  if (!task || !Object.hasOwn(task, 'taskQuestion') || !Object.hasOwn(task, 'taskAnswers')) {
    return {
      taskQuestion: '',
      taskAnswers: [],
      formattedAnswers: [],
      taskCorrectAnswerID: '',
      chosenAnswerID: '',
      chosenWords: [],
    }
  }

  const data = task as RightAnswerTaskText

  const { taskQuestion, taskAnswers } = data

  const formattedAnswers: RightAnswerTaskItem[] = []
  taskAnswers.forEach((item, i) => {
    item.answers.forEach((subitem, index) => {
      if (i === 0) {
        formattedAnswers.push({ id: subitem.id, type: subitem.type, value: subitem.value })
      } else if (formattedAnswers[index].type === subitem.type) {
        formattedAnswers[index].value = [formattedAnswers[index].value, subitem.value].join(' / ')
      }
    })
  })

  const taskCorrectAnswerID = formattedAnswers.find((item) => item.type === 'correct')?.id || ''
  const chosenWords = new Array(taskAnswers.length)

  return {
    taskQuestion,
    taskAnswers,
    formattedAnswers: randomPlacement ? randomSortArray(formattedAnswers) : formattedAnswers,
    taskCorrectAnswerID,
    chosenAnswerID: '',
    chosenWords,
  }
}
