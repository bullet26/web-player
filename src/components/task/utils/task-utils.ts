import { CSSProperties } from 'react'

export const onValidText = (status: boolean, withCheck: boolean) => {
  let validateText = 'Вашу відповідь зараховано'

  if (!status && withCheck) {
    validateText = 'Невірно'
  } else if (status && withCheck) {
    validateText = 'Все вірно'
  }

  return validateText
}

export const getColorCell = (withCheck: boolean, validationArray: string[], itemId: string) => {
  let style: CSSProperties = {}

  if (!withCheck) {
    style = { background: '#FDF8E6', border: '1px solid #FFCC00' }
  } else if (withCheck && validationArray.includes(itemId)) {
    style = { background: '#FEE8E9', border: '1px solid #EC2028' }
  } else if (withCheck) {
    style = { background: '#ECFFEE', border: '1px solid #00F418' }
  }

  return style
}

export const getColorText = (withCheck: boolean, validationArray: string[], itemId: string) => {
  let style: CSSProperties = {}

  if (!withCheck) {
    style = {}
  } else if (withCheck && validationArray.includes(itemId)) {
    style = { color: '#EC2028' }
  } else if (withCheck) {
    style = {}
  }

  return style
}

export const getColorBorder = (withCheck: boolean, validationArray: string[], itemId: string) => {
  let style: CSSProperties = {}

  if (!withCheck) {
    style = { border: '1px solid #FFCC00' }
  } else if (withCheck && validationArray.includes(itemId)) {
    style = { border: '1px solid #EC2028' }
  } else if (withCheck) {
    style = { border: '1px solid #00F418' }
  }

  return style
}

export const getColorBorderInString = (
  withCheck: boolean,
  validationArray: string[],
  itemId: string,
  format: 'all' | 'bottom' = 'all',
  status: boolean = true,
) => {
  let color = ''

  if (!withCheck) {
    color = '#FFCC00'
  } else if ((withCheck && validationArray.includes(itemId)) || (withCheck && !status)) {
    color = '#EC2028'
  } else if (withCheck) {
    color = '#00F418'
  }

  return format === 'bottom' ? `border-bottom: 1px solid ${color}` : `border: 1px solid ${color}`
}

export const getColorCircle = (
  withCheck: boolean,
  validationArray: string[],
  itemId: string,
  status: boolean = true,
) => {
  let style = ''

  if (!withCheck) {
    style = 'background: #FDF8E6; color: #FFCC00'
  } else if ((withCheck && validationArray.includes(itemId)) || (withCheck && !status)) {
    style = 'background: #FEE8E9; color: #EC2028'
  } else if (withCheck) {
    style = 'background: #ECFFEE; color: #00F418'
  }

  return style
}
