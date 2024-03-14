import { FC } from 'react'
import { useBlocks } from 'store'
import { ViewModeContent, ChapterPanel, Dictionary, Notebook } from 'components'
import s from './Player.module.scss'

export const StudentPlayer: FC = () => {
  const selectedChapterID = useBlocks((state) => state.selectedChapterID)

  const chapterWidth = 150
  const dictionaryWidth = 195
  const wrapperWidth = document.getElementById('root')?.clientWidth ?? window.innerWidth

  const width = wrapperWidth - chapterWidth - dictionaryWidth

  return (
    <>
      <div className={s.chapterWrapper}>
        <ChapterPanel />
      </div>
      <div style={{ maxWidth: `${width}px`, marginLeft: `${chapterWidth}px` }}>
        {selectedChapterID && <ViewModeContent />}
      </div>
      <div className={s.dictionaryWrapper}>
        <Dictionary />
        <Notebook />
      </div>
    </>
  )
}
