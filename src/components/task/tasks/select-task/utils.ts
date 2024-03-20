import { PreparedAnswerFromSelectTask } from 'types'
import { getColorCircle, getColorBorderInString } from 'components/task/utils'
import { RefObject } from 'react'

export const onValidateTask = (data: PreparedAnswerFromSelectTask) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { taskCorrectAnswerIDs, chosenAnswerIDs } = data

  const validation = Object.entries(chosenAnswerIDs).map(([key, value]) => {
    if (taskCorrectAnswerIDs[key] !== value) {
      status = false
      return key
    }
    return ''
  })

  return { status, validation }
}

export const onSubmitUpdateHTML = (
  validation: string[],
  withCheck: boolean,
  taskRef: RefObject<HTMLDivElement>,
) => {
  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const selectNode = parentNode?.querySelector('select')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!selectNode || !circle || !itemID) {
      return
    }

    selectNode.style.cssText = getColorBorderInString(withCheck, validation, itemID, 'all')
    circle.style.cssText = getColorCircle(withCheck, validation, itemID)
    selectNode.setAttribute('disabled', '')
  })
}

export const onMountUpdateHTML = (
  withCheck: boolean,
  data: PreparedAnswerFromSelectTask,
  taskRef: RefObject<HTMLDivElement>,
) => {
  if (!data || !data?.chosenAnswerIDs) {
    return
  }

  const { validation } = onValidateTask(data)

  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const selectNode = parentNode?.querySelector('select')
    const itemID = parentNode.getAttribute('data-skip')

    if (!selectNode || !itemID) {
      return
    }
    const valueID = data.chosenAnswerIDs[itemID]

    if (valueID) {
      const value = document.getElementById(valueID)?.textContent || ''
      selectNode.value = value
    }
  })

  onSubmitUpdateHTML(validation, withCheck, taskRef)
}

export const onCleanHTML = (taskRef: RefObject<HTMLDivElement>) => {
  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const selectNode = parentNode?.querySelector('select')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!selectNode || !circle || !itemID) {
      return
    }

    selectNode.removeAttribute('disabled')
    selectNode.style.cssText = ''
    circle.style.cssText = ''
    selectNode.value = ''
  })
}
