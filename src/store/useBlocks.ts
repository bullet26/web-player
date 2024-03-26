/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { getLessonByVersionId } from 'api'
import { LessonType, DataType } from 'types'

interface IBlocks {
  data: LessonType
  getBlocksInCurrentChapter: () => DataType
  isLoading: boolean
  isError: boolean
  error: string | null
  fetchBlocks: (accessToken: string, versionId: string) => void
  selectedChapterID: string | null
  setSelectedChapterID: (id: string | null) => void
}

export const useBlocks = create<IBlocks>()(
  devtools((set, get) => ({
    data: { title: '', chapters: [] } as LessonType,
    isLoading: false,
    isError: false,
    error: null,
    selectedChapterID: null,
    fetchBlocks: async (accessToken: string, versionId: string) => {
      try {
        set({ isLoading: true })
        const data = await getLessonByVersionId(accessToken, versionId)
        set({ data })
        set({ isError: false })
        set({ error: null })
      } catch (error) {
        set({ isError: true })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set({ error: (error as any)?.message || 'На жаль щось пішло не так' })
      } finally {
        set({ isLoading: false })
      }
    },
    getBlocksInCurrentChapter: () => {
      return get().data.chapters.find((item) => item.id === get().selectedChapterID)?.blocks || []
    },

    setSelectedChapterID: (id: string | null) => {
      set({ selectedChapterID: id })
    },
  })),
)
