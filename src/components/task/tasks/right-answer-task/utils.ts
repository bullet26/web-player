import { PreparedRightAnswerTask } from 'types'

export const onValidateTask = (data: PreparedRightAnswerTask) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  return { status, validation: [] }
}
