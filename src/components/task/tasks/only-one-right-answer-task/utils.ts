import { PreparedOnlyOneRightAnswerTask } from 'types'
import { getColorCircle, getColorBorderInString } from 'components/task/utils'
import { RefObject } from 'react'

export const onValidateTask = (data: PreparedOnlyOneRightAnswerTask) => {
  let status = true
  const validation: string[] = []

  if (!data) {
    return { status: false, validation }
  }

  const { taskCorrectAnswerID, chosenAnswerID } = data

  if (taskCorrectAnswerID !== chosenAnswerID) {
    validation.push(chosenAnswerID)
    status = false
  }

  return { status, validation }
}

export const onSubmitUpdateHTML = (
  validation: string[],
  withCheck: boolean,
  initialWords: string[],
  status: boolean,
  taskRef: RefObject<HTMLDivElement>,
) => {
  const words = [...initialWords]
  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const lineNode: HTMLSelectElement | null = parentNode?.querySelector('.line')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!lineNode || !circle || !itemID || !initialWords) {
      return
    }

    lineNode.innerHTML += words.shift()
    lineNode.style.cssText = getColorBorderInString(withCheck, validation, itemID, 'bottom', status)
    circle.style.cssText = getColorCircle(withCheck, validation, itemID, status)
  })
}

export const onMountUpdateHTML = (
  withCheck: boolean,
  data: PreparedOnlyOneRightAnswerTask,
  taskRef: RefObject<HTMLDivElement>,
) => {
  if (!data || !data?.chosenWords.length) {
    return
  }

  const { status, validation } = onValidateTask(data)

  onSubmitUpdateHTML(validation, withCheck, data.chosenWords, status, taskRef)
}

export const onCleanHTML = (taskRef: RefObject<HTMLDivElement>) => {
  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const lineNode: HTMLSelectElement | null = parentNode?.querySelector('.line')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!lineNode || !circle || !itemID) {
      return
    }

    lineNode.innerHTML = ''
    lineNode.style.cssText = ''
    circle.style.cssText = ''
  })
}
