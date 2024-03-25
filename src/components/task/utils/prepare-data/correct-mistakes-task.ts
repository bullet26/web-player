import { CorrectMistakesText, PreparedCorrectMistakesTask, TaskTypeOneItem } from 'types'

export const preparedCorrectMistakesTask = (
  task: TaskTypeOneItem | null,
): PreparedCorrectMistakesTask => {
  if (!task || !Object.hasOwn(task, 'wrongSentence') || !Object.hasOwn(task, 'correctSentence')) {
    return { wrongSentence: '', compareSentence: '', correctSentence: '' }
  }

  const data = task as CorrectMistakesText

  const { wrongSentence, correctSentence } = data

  return { wrongSentence, correctSentence, compareSentence: wrongSentence }
}
