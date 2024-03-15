import { PreparedSplitSentenceTask } from 'types'

export const onValidateTask = (data: PreparedSplitSentenceTask | null) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { correctOrderSentence, compareSentence } = data

  const validation = compareSentence.map((item, i) => {
    if (item !== correctOrderSentence[i]) {
      status = false
      return i.toString()
    }
    return ''
  })

  return { status, validation }
}
