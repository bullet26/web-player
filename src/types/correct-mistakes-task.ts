import { DifficultyLevel, RightAnswerTask } from 'types'

export interface CorrectMistakesText {
  difficultyLevel: DifficultyLevel
  wrongSentence: string
  correctSentence: string
}

export interface CorrectMistakesTask extends Omit<RightAnswerTask, 'taskText'> {
  taskText: CorrectMistakesText[]
}

export interface PreparedCorrectMistakesTask {
  wrongSentence: string
  compareSentence: string
  correctSentence: string
}
