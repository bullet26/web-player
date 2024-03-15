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
