import { DifficultyLevel } from 'types'

export interface RightAnswerTaskItem {
  id: string
  type: 'correct' | 'incorrect'
  value: string
}

export interface RightAnswerTaskAnswer {
  id: string
  answers: RightAnswerTaskItem[]
}

export interface RightAnswerTaskText {
  difficultyLevel: DifficultyLevel
  taskQuestion: string
  taskAnswers: RightAnswerTaskAnswer[]
}

export interface RightAnswerTask {
  title: string
  description: string
  taskText: RightAnswerTaskText[]
  parameters: string[]
}

export interface PreparedAnswerFromSelectTask {
  taskHTMLContent: string | TrustedHTML
  taskCorrectAnswerIDs: { [x: string]: string }
  chosenAnswerIDs: { [x: string]: string }
}

export interface PreparedRightAnswerTask {
  taskQuestion: string | TrustedHTML
  taskAnswers: RightAnswerTaskAnswer[]
  taskCorrectAnswerIDs: { [x: string]: string }
  chosenAnswerIDs: { [x: string]: string }
}
