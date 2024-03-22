import { PreparedTypeAnswerInput, RightAnswerTaskText, TaskTypeOneItem } from 'types'

export const preparedTypeAnswerTask = (task: TaskTypeOneItem | null): PreparedTypeAnswerInput => {
  if (!task || !Object.hasOwn(task, 'taskAnswers') || !Object.hasOwn(task, 'taskAnswers')) {
    return { taskHTMLContent: '', taskCorrectAnswerWords: {}, typingWords: {} }
  }

  const data = task as RightAnswerTaskText

  const idMatches = data.taskQuestion.match(/data-skip="([^"]+)"/g)
  const ids = idMatches ? idMatches.map((item) => item.match(/data-skip="([^"]+)"/)?.at(1)) : []

  const inputElements = ids.map((id) => {
    if (!id) {
      return ''
    }

    return `<input type="text" name="answer" maxlength="100" id=${id} oninput="this.size = this.value.length || 1" />`
  })
  const taskHTMLContent = data.taskQuestion.replace(
    /<span class="rectangle"><\/span>/g,
    () => inputElements.shift() || '<input/>',
  )

  const taskCorrectAnswerWords: { [x: string]: string[] } = {}

  data.taskAnswers.forEach((item) => {
    const correctAnswerWordsForInput = item.answers.map((subitem) => subitem.value)

    taskCorrectAnswerWords[item.id] = correctAnswerWordsForInput
  })

  return { taskHTMLContent, taskCorrectAnswerWords, typingWords: {} }
}
