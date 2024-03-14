import { CSSProperties, FC } from 'react'
import { useDrop } from 'react-dnd'
import { OtherWordItem } from 'types'
import s from '../CategorizeTaskView.module.scss'

interface DropCellItemProps {
  index: string
  word: string
  otherWords?: { id: string; word: string; groupNumber: number | null }[]
  dragType: string
  styleItemWord: (id: string) => CSSProperties
  onClickWordItem: (index: string, itemID: string, word: string, groupNumber: number | null) => void
}

export const DropCellItem: FC<DropCellItemProps> = (props) => {
  const { dragType, otherWords, word, onClickWordItem, index, styleItemWord } = props

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
      className={s.groupBlock}
      ref={drop}
      style={{ borderColor: `${isActiveCell ? 'darkblue' : '#c2d3ea'}` }}>
      <div className={s.groupBlockTitle}>{word}</div>
      <div className={s.otherWordsWrapper}>
        {otherWords?.map((item) => (
          <div
            key={item.id}
            className={s.otherWordItem}
            style={styleItemWord(item.id)}
            onClick={() => onClickWordItem(index, item.id, item.word, item.groupNumber)}>
            {item.word}
          </div>
        ))}
      </div>
    </div>
  )
}
