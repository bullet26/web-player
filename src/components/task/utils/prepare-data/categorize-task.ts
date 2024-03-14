import { CategorizeTaskText, PreparedCategorizeTask, TaskTypeOneItem } from 'types'
import { randomSortArray } from 'utils'

export const preparedCategorizeTask = (
  task: TaskTypeOneItem | null,
  randomPlacement: boolean,
): PreparedCategorizeTask => {
  if (!task || !Object.hasOwn(task, 'groups')) {
    return {
      mainWords: [],
      otherWords: [],
      rowCount: 1,
      comparedWordsGroup: {},
      correctWordsGroup: {},
    }
  }

  const data = task as CategorizeTaskText

  let rowCount = 0
  const comparedWordsGroup: {
    [x: string]: { words: { id: string; word: string; groupNumber: number | null }[] }
  } = {}
  const correctWordsGroup: { [x: string]: { wordIDs: string[] } } = {}

  const mainWords = data.groups.map((item) => {
    comparedWordsGroup[item.id] = { words: [] }
    return {
      id: item.id,
      word: item.mainWord,
    }
  })

  const newOtherWords = data.groups.flatMap((item, i) => {
    rowCount = item.otherWords.length > rowCount ? item.otherWords.length : rowCount
    correctWordsGroup[item.id] = { wordIDs: [] }
    return item.otherWords.map((subitem) => {
      correctWordsGroup[item.id].wordIDs.push(subitem.id)
      return {
        id: subitem.id,
        word: subitem.word,
        groupNumber: randomPlacement ? null : i + 1,
      }
    })
  })
  const otherWords = randomPlacement ? randomSortArray(newOtherWords) : newOtherWords

  return { mainWords, otherWords, rowCount, comparedWordsGroup, correctWordsGroup }
}
