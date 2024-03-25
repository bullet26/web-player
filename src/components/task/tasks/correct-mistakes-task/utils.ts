import { PreparedCorrectMistakesTask } from 'types'

export const onValidateTask = (data: PreparedCorrectMistakesTask | null) => {
  if (!data) {
    return { status: false }
  }

  const { correctSentence, compareSentence } = data

  const correctValue = correctSentence.replace(/[`"',.\s*]/g, '')
  const checkValue = compareSentence.replace(/[`"',.\s*]/g, '')
  const regexp = new RegExp(correctValue, 'i')
  return { status: regexp.test(checkValue) }
}
