import { PreparedCategorizeTask } from 'types'

export const onValidateTask = (data: PreparedCategorizeTask | null) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { comparedWordsGroup, correctWordsGroup } = data

  const validation = Object.entries(comparedWordsGroup).flatMap(([key, value]) => {
    return value.words.map((item) => {
      if (!correctWordsGroup[key].wordIDs.includes(item.id)) {
        status = false
        return item.id
      }
      return ''
    })
  })

  return { status, validation }
}
