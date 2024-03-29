import { PreparedRightAnswerTask } from 'types'
import { getColorCircle, getColorBorderInString } from 'components/task/utils'
import { RefObject } from 'react'

export const onValidateTask = (data: PreparedRightAnswerTask) => {
  let status = true
  const validationBlockIds: string[] = []
  const validationItemIds: string[] = []

  if (!data) {
    return { status: false, validationBlockIds, validationItemIds }
  }

  const { taskCorrectAnswerIDs, chosenAnswerIDs } = data

  Object.entries(chosenAnswerIDs).forEach(([key, value]) => {
    if (taskCorrectAnswerIDs[key] !== value) {
      status = false
      validationBlockIds.push(key)
      validationItemIds.push(value)
    }
  })

  return { status, validationBlockIds, validationItemIds }
}

export const onSubmitUpdateHTML = (
  validation: string[],
  withCheck: boolean,
  initialWords: string[],
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
    lineNode.style.cssText = getColorBorderInString(withCheck, validation, itemID, 'bottom')
    circle.style.cssText = getColorCircle(withCheck, validation, itemID)
  })
}

export const onMountUpdateHTML = (
  withCheck: boolean,
  data: PreparedRightAnswerTask,
  taskRef: RefObject<HTMLDivElement>,
) => {
  if (!data || !data?.chosenWords.length) {
    return
  }

  const { validationBlockIds: validation } = onValidateTask(data)

  onSubmitUpdateHTML(validation, withCheck, data.chosenWords, taskRef)
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
