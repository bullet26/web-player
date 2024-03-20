import { FC, useRef, CSSProperties } from 'react'
import type { Identifier, XYCoord } from 'dnd-core'
import { useDrag, useDrop } from 'react-dnd'
import { HandMoveIcon } from 'assets'
import s from '../SortDialogueTaskView.module.scss'

interface DragAndDropItemProps {
  isAllowDnD: boolean
  index: number
  id: string
  dragType: string
  sentence: string
  styleItem: (id: string) => CSSProperties
  movePhraseInDialogue: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export const DragAndDropItem: FC<DragAndDropItemProps> = (props) => {
  const { index, dragType, id, sentence, movePhraseInDialogue, isAllowDnD, styleItem } = props

  const ref = useRef<HTMLDivElement>(null)

  // handlerId - handler id is using for proper definition of drop item and handlerId !== id

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: isAllowDnD ? dragType : 'false',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset() //  Determine mouse position
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      movePhraseInDialogue(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: dragType,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  })

  drag(drop(ref)) //  Initialize drag and drop into the element

  return (
    <div
      className={s.dialogueItem}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: `${isDragging ? '2px dotted grey' : '1px solid #c2d3ea'}`,
        ...styleItem(id),
      }}
      data-handler-id={handlerId}
      ref={ref}>
      <span className={s.text}>- {sentence}</span>
      {isAllowDnD && <HandMoveIcon />}
    </div>
  )
}
