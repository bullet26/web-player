import { DifficultyLevel, RightAnswerTask } from 'types'

export interface OtherWordItem {
  id: string
  word: string
}

export interface CategorizeTaskGroup {
  id: string
  mainWord: string
  otherWords: OtherWordItem[]
}

export interface CategorizeTaskText {
  difficultyLevel: DifficultyLevel
  groups: CategorizeTaskGroup[]
}

export interface CategorizeTask extends Omit<RightAnswerTask, 'taskText'> {
  taskText: CategorizeTaskText[]
}

export interface PreparedCategorizeTask {
  mainWords: { id: string; word: string }[]
  otherWords: { id: string; word: string; groupNumber: number | null }[]
  rowCount: number
  comparedWordsGroup: {
    [x: string]: { words: { id: string; word: string; groupNumber: number | null }[] }
  }
  correctWordsGroup: { [x: string]: { wordIDs: string[] } }
}
