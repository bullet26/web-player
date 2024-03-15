import { PreparedAnswerFromSelectTask } from 'types'

export const onValidateTask = (data: PreparedAnswerFromSelectTask) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  return { status, validation: [] }
}
