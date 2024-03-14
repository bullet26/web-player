import { PreparedCompareTask } from 'types'

export const onValidateTask = (data: PreparedCompareTask | null) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { leftWords, comparedRightWords } = data

  const validation = Object.entries(comparedRightWords).map(([key, value]) => {
    const index = Number(key) ?? 0
    if (leftWords[index].id !== value.id) {
      status = false
      return leftWords[index].id
    }
    return ''
  })

  return { status, validation }
}
