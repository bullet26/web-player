import { FC } from 'react'
import { useDrag } from 'react-dnd'
import s from '../CategorizeTaskView.module.scss'

interface DragWordItemProps {
  id: string
  word: string
  groupNumber: number | null
  dragType: string
  dropEndFn: (
    dragItem: { id: string; word: string; groupNumber: number | null },
    dropItem: { dropEffect: string; index: string } | null,
  ) => void
}

export const DragWordItem: FC<DragWordItemProps> = (props) => {
  const { id, dragType, word, dropEndFn, groupNumber } = props

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: dragType,
    item: () => {
      return { id, word, groupNumber }
    },
    end: (item, monitor) => {
      dropEndFn(item, monitor.getDropResult())
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  }))

  return isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div
      key={id}
      className={s.otherWordsBtn}
      style={{ gridColumnStart: groupNumber || 'unset' }}
      ref={drag}>
      {word}
    </div>
  )
}
