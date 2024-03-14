import { FC } from 'react'
import { useDrag } from 'react-dnd'
import s from '../CompareTask.module.scss'

interface DragWordItemProps {
  id: string
  word: string
  dragType: string
  dropEndFn: (
    dragItem: { id: string; word: string },
    dropItem: { dropEffect: string; index: number } | null,
  ) => void
}

export const DragWordItem: FC<DragWordItemProps> = (props) => {
  const { id, dragType, word, dropEndFn } = props

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: dragType,
    item: () => {
      return { id, word }
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
    <div key={id} className={s.dragButton} ref={drag}>
      {word}
    </div>
  )
}
