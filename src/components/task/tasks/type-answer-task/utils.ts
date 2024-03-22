import { PreparedTypeAnswerInput } from 'types'
import { getColorCircle, getColorBorderInString } from 'components/task/utils'
import { RefObject } from 'react'

const regexpCheck = (checkValueInit: string, correctValueInit: string) => {
  const correctValue = checkValueInit.replace(/[`"',.]/g, '')
  const checkValue = correctValueInit.replace(/[`"',.]/g, '')
  const regexp = new RegExp(correctValue, 'i')
  return regexp.test(checkValue)
}

export const onValidateTask = (data: PreparedTypeAnswerInput) => {
  let status = true
  if (!data) {
    return { status: false, validation: [] }
  }

  const { taskCorrectAnswerWords, typingWords } = data

  const validation = Object.entries(typingWords).map(([key, value]) => {
    if (!taskCorrectAnswerWords[key].some((subitem) => regexpCheck(value, subitem))) {
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
    const inputNode = parentNode?.querySelector('input')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!inputNode || !circle || !itemID) {
      return
    }

    inputNode.style.cssText = getColorBorderInString(withCheck, validation, itemID, 'all')
    circle.style.cssText = getColorCircle(withCheck, validation, itemID)
    inputNode.setAttribute('disabled', '')
  })
}

export const onMountUpdateHTML = (
  withCheck: boolean,
  data: PreparedTypeAnswerInput,
  taskRef: RefObject<HTMLDivElement>,
) => {
  if (!data || !data?.typingWords) {
    return
  }

  const { validation } = onValidateTask(data)

  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const inputNode = parentNode?.querySelector('input')
    const itemID = parentNode.getAttribute('data-skip')

    if (!inputNode || !itemID) {
      return
    }
    const value = data.typingWords[itemID]

    if (value) {
      inputNode.value = value
    }
  })

  onSubmitUpdateHTML(validation, withCheck, taskRef)
}

export const onCleanHTML = (taskRef: RefObject<HTMLDivElement>) => {
  taskRef?.current?.querySelectorAll('.skip').forEach((item) => {
    const parentNode = item
    const inputNode = parentNode?.querySelector('input')
    const circle: HTMLSelectElement | null = parentNode?.querySelector('.circle')
    const itemID = parentNode.getAttribute('data-skip')
    if (!inputNode || !circle || !itemID) {
      return
    }

    inputNode.removeAttribute('disabled')
    inputNode.style.cssText = ''
    circle.style.cssText = ''
    inputNode.value = ''
  })
}
