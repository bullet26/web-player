import { DifficultyLevel, TaskType, Type, PreparedTask } from 'types'
import { preparedCompareTask } from './compare-task'
import { preparedCategorizeTask } from './categorize-task'
import { preparedSplitSentenceTask } from './split-sentence-task'
import { preparedAnswerFromSelectTask } from './select-task'
import { preparedRightAnswerTask } from './right-answer-task'
import { preparedOnlyOneOrTwoRightAnswerTask } from './only-one-right-answer-task'
import { preparedSortDialogueTask } from './sort-dialogue-task'
import { preparedTrueOrFalseTask } from './true-or-false-task'
import { preparedTypeAnswerTask } from './type-answer-task'

export const preparedTaskData = (
  type: Type,
  difficultyLevel: DifficultyLevel,
  randomPlacement: boolean,
  data?: TaskType,
): PreparedTask | null => {
  if (!data) {
    return null
  }

  const currentData = data.taskText.find((item) => item.difficultyLevel === difficultyLevel) || null

  if (type === 'compareTask') {
    return preparedCompareTask(currentData, randomPlacement)
  }
  if (type === 'categorizeTask') {
    return preparedCategorizeTask(currentData, randomPlacement)
  }
  if (type === 'orderSplitSentence') {
    return preparedSplitSentenceTask(currentData, randomPlacement)
  }
  if (type === 'answerFromSelect') {
    return preparedAnswerFromSelectTask(currentData, randomPlacement)
  }
  if (type === 'rightAnswerTask') {
    return preparedRightAnswerTask(currentData, randomPlacement)
  }
  if (type === 'onlyOneOrTwoRightAnswerTask') {
    return preparedOnlyOneOrTwoRightAnswerTask(currentData, randomPlacement)
  }
  if (type === 'sortDialogue') {
    return preparedSortDialogueTask(currentData, randomPlacement)
  }
  if (type === 'trueOrFalseTask') {
    return preparedTrueOrFalseTask(currentData)
  }
  if (type === 'typeAnswerTask') {
    return preparedTypeAnswerTask(currentData)
  }
  return null
}
