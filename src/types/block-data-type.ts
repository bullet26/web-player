import {
  CategorizeTask,
  CompareTask,
  RightAnswerTask,
  TaskWithoutAnswer,
  SortDialogueTask,
  TrueOrFalseTask,
  CorrectMistakesTask,
  RightAnswerTaskText,
  CompareTaskText,
  CategorizeTaskText,
  SortDialogueTaskText,
  TrueOrFalseTaskText,
  TaskTextWithoutAnswer,
  CorrectMistakesText,
  PreparedCompareTask,
  PreparedCategorizeTask,
} from 'types'

export const types = [
  'title',
  'custom',
  'note',
  'image',
  'table',
  'rightAnswerTask',
  'onlyOneOrTwoRightAnswerTask',
  'answerFromSelect',
  'orderSplitSentence',
  'compareTask',
  'categorizeTask',
  'sortDialogue',
  'trueOrFalseTask',
  'typeAnswerTask',
  'correctMistakesTask',
]

export type Type = (typeof types)[number]

export type DifficultyLevel = 'easy' | 'middle' | 'hard'

export type TaskType =
  | RightAnswerTask
  | TaskWithoutAnswer
  | CompareTask
  | CategorizeTask
  | SortDialogueTask
  | TrueOrFalseTask
  | CorrectMistakesTask

export type TaskTypeOneItem =
  | RightAnswerTaskText
  | TaskTextWithoutAnswer
  | CompareTaskText
  | CategorizeTaskText
  | SortDialogueTaskText
  | TrueOrFalseTaskText
  | CorrectMistakesText

export type PreparedTask = PreparedCompareTask | PreparedCategorizeTask

export type DataTypeItem = {
  text?: string
  type: Type
  savedInLibrary: boolean
  id: string
  url?: string
  taskData?: TaskType
  tableColumns?: Omit<DataTypeItem, 'savedInLibrary'>[]
  imageCaption?: string
}

export type DataTypeItemTask = Pick<DataTypeItem, 'type' | 'id'> & {
  taskData: TaskType
}

export type DataType = DataTypeItem[]