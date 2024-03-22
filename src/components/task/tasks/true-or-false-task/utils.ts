import { PreparedTrueOrFalseTask } from 'types'

export const onValidateTask = (data: PreparedTrueOrFalseTask | null) => {
  let status = true
  if (!data) {
    return { status: false }
  }

  const { userAnswer, answer } = data
  if (userAnswer !== answer) {
    status = false
  }

  return { status }
}
