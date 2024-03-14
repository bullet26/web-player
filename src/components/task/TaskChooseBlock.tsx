/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect } from 'react'
import { Type, TaskType } from 'types'
import { preparedTaskData, useTaskContext } from 'components/task/utils'
import { CompareTask, CategorizeTask } from 'components/task/tasks'

interface TaskChooseBlockProps {
  type: Type
  data?: TaskType
}
export const TaskChooseBlock: FC<TaskChooseBlockProps> = (props) => {
  const { type, data } = props

  const { difficultyLevel, setData, getData, randomPlacement } = useTaskContext()

  useEffect(() => {
    if (data && !getData(difficultyLevel)) {
      const result = preparedTaskData(type, difficultyLevel, randomPlacement, data)
      !!result && setData(result, difficultyLevel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, type, difficultyLevel, randomPlacement])

  const onRepeatTask = () => {
    const result = preparedTaskData(type, difficultyLevel, randomPlacement, data)
    !!result && setData(result, difficultyLevel)
  }

  return (
    <div>
      {type === 'compareTask' && <CompareTask onRepeat={onRepeatTask} />}
      {type === 'categorizeTask' && <CategorizeTask onRepeat={onRepeatTask} />}
    </div>
  )
}
