import { RightAnswerTaskText, PreparedAnswerFromSelectTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedAnswerFromSelectTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedAnswerFromSelectTask => {
  if (!task || !Object.hasOwn(task, 'taskAnswers') || !Object.hasOwn(task, 'taskAnswers')) {
    return { taskHTMLContent: '', taskCorrectAnswerIDs: {}, chosenAnswerIDs: {} }
  }

  const data = task as RightAnswerTaskText

  const idMatches = data.taskQuestion.match(/data-skip="([^"]+)"/g)
  const ids = idMatches ? idMatches.map((item) => item.match(/data-skip="([^"]+)"/)?.at(1)) : []

  const selectElements = ids.map((id) => {
    if (!id) {
      return ''
    }
    const currentTaskAnswer = data.taskAnswers.find((item) => item.id === id)
    const options = currentTaskAnswer?.answers || []
    const groupID = currentTaskAnswer?.id || ''
    const sortOptions = randomPlacement ? randomSortArray(options) : options

    const optionsForSelect =
      sortOptions?.map((item) => item.value && `<option id=${item.id}>${item.value}</option>`) ||
      `<option></option>`
    return `<select id=${groupID}><option value disabled selected></option>${optionsForSelect}</select>`
  })
  const taskHTMLContent = data.taskQuestion.replace(
    /<span class="rectangle"><\/span>/g,
    () => selectElements.shift() || '<select></select>',
  )

  const taskCorrectAnswerIDs: { [x: string]: string } = {}

  data.taskAnswers.forEach((item) => {
    const correctAnswerID = item.answers.find((subitem) => subitem.type === 'correct')?.id || ''

    taskCorrectAnswerIDs[item.id] = correctAnswerID
  })

  return { taskHTMLContent, taskCorrectAnswerIDs, chosenAnswerIDs: {} }
}
