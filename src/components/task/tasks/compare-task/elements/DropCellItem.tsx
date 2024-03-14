import { CSSProperties, FC } from 'react'
import { useDrop } from 'react-dnd'
import s from '../CompareTask.module.scss'

interface DropCellItemProps {
  index: number
  style?: CSSProperties
  word?: string
  dragType: string
  onClickCell: (index: number, word?: string) => void
}

export const DropCellItem: FC<DropCellItemProps> = (props) => {
  const { index, dragType, word, style, onClickCell } = props

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: dragType,
    drop: () => ({ index }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActiveCell = canDrop && isOver

  return (
    <div
      className={s.rightPart}
      ref={!word ? drop : null}
      style={{ backgroundColor: `${isActiveCell ? 'darkblue' : '#f1f5fa'}`, ...style }}
      onClick={() => onClickCell(index, word)}>
      {!!word && word}
    </div>
  )
}
