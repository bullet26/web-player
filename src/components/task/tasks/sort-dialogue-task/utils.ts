import { PreparedSortDialogueTask } from 'types'

export const onValidateTask = (data: PreparedSortDialogueTask | null) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { correctOrderSentences, compareSentences } = data

  const validation = compareSentences.map((item, i) => {
    if (item.id !== correctOrderSentences[i].id) {
      status = false
      return item.id
    }
    return ''
  })

  return { status, validation }
}
