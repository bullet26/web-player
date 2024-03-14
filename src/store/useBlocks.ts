/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { getBlocks } from 'api'
import { LessonType, DataType } from 'types'

const temporaryData = {
  id: '9uRrVs0kep9mnMgmINSU7',
  title: '',
  chapters: [
    {
      id: 'J0LpPfDVMlk0SoF36jC8T',
      title: 'ch 2',
      blocks: [
        {
          type: 'title',
          id: '7rhKadJ8CkAVX2uFBBEUp',
          savedInLibrary: false,
          text: 'lesson theme ',
        },
        {
          type: 'image',
          id: 'ZhKjXXUVNZ-WCf35_kB5u',
          savedInLibrary: false,
          url: 'https://img.freepik.com/premium-photo/beautiful-young-asian-woman-portrait-cute-girl-wallpaper-background-photo_877869-8956.jpg?w=360',
          imageCaption: '555555555555',
        },
        {
          id: '0hrrq7qrr-hSCxSu0vwDC',
          type: 'compareTask',
          taskData: {
            title: 'compare',
            description: 'ююююю compare  compare',
            taskText: [
              {
                difficultyLevel: 'easy',
                wordPairs: [
                  {
                    id: 'F8riaBXMAkgu2ncAMtEK5',
                    left: '111',
                    right: '222222',
                  },
                  {
                    id: 'WISc3a9vbGkYK-v-R4kJ1',
                    left: 'To tolerate sm',
                    right: 'Not have any left (time, money, coffe)',
                  },
                  {
                    id: 'cuD8giyDyZMXElnZPiK_U',
                    left: 'Amet nulla facilisi',
                    right: 'morbi tempus',
                  },
                  {
                    id: 'LoXI4vfrJ7anRPfo3mcGw',
                    left: 'Proin gravida hendrerit lectus a. ',
                    right: 'Nunc faucibus a pellentesque sit amet porttitor eget dolor',
                  },
                ],
              },
              {
                difficultyLevel: 'middle',
                wordPairs: [
                  {
                    id: 'FG9MM83Bc_1zQ4ROA0ekA',
                    left: '444',
                    right: '5',
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                wordPairs: [
                  {
                    id: 'VKb4kbIHXlrsnyFutWlJU',
                    left: 'hhh',
                    right: 'hhhhhhhhhhhh',
                  },
                ],
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
          },
          savedInLibrary: false,
        },
        {
          id: 'UVYJhsb6AhwbCe7QqFjR3',
          type: 'categorizeTask',
          taskData: {
            title: 'categorize',
            description: 'ююююю categorize  categorize',
            taskText: [
              {
                difficultyLevel: 'easy',
                groups: [
                  {
                    id: 'WKBKIZccRK2IsYf_ISkez',
                    mainWord: '1',
                    otherWords: [
                      {
                        id: 'oFIWMbEeLzEf-0PhZ7QSQ',
                        word: 'Lorem',
                      },
                      {
                        id: 'PdhqPWXrJN-gQwOKR5t_L',
                        word: 'ipsum',
                      },
                      {
                        id: 'Z22VGqt9Jk5CWZf91ceZI',
                        word: 'dolor',
                      },
                      {
                        id: 'NfcwhZTjMpdGtPV-BQ_SJ',
                        word: 'When sizing rows and columns, you can use all',
                      },
                    ],
                  },
                  {
                    id: 'z6lH9rOvF2BkBfmdex4kk',
                    mainWord: '2',
                    otherWords: [
                      {
                        id: 'lvKXarIK_lklkYkKpdVVD',
                        word: 'consectetur',
                      },
                      {
                        id: 'YlyL3LEVIC8w5ENlU0sKX',
                        word: 'Excepteur sint occaecat cupidatat',
                      },
                      {
                        id: 'gAr0defw7chqb7lybb-qk',
                        word: 'laborum',
                      },
                      {
                        id: 'vWEkILSDnotJGSDaFcb3J',
                        word: 'vvvvvv',
                      },
                    ],
                  },
                  {
                    id: 'frjumwuBeLpHwg_c20842',
                    mainWord: '3',
                    otherWords: [
                      {
                        id: 'WDEyshNsccibee2qQDvNO',
                        word: 'Duis aute irure',
                      },
                      {
                        id: 'Z4AYc4-LXFeOeVLjpCCW5',
                        word: ' ipsum dolor sit amet, consectetur ',
                      },
                      {
                        id: 'eMPkk9Q6xxOwzHqtkFBjv',
                        word: 'Классический «Lorem ipsum dolo jjj',
                      },
                      {
                        id: 'XzX_GOiDtFcpKIx7bJnR9',
                        word: 'roken 100% width (assuming',
                      },
                    ],
                  },
                  {
                    id: 'ZaMJMGE2KcOvyYy3jCF37',
                    mainWord: '4',
                    otherWords: [
                      {
                        id: 'BqAyzBygiXzoM8OCBE_kz',
                        word: 'Nor is there anyone',
                      },
                      {
                        id: 'bekgydmQjHmTpqeb75rSH',
                        word: 'профессор Richard McClintock ',
                      },
                      {
                        id: 'MJK-jI3haj47zI4F034Wq',
                        word: 'grew ',
                      },
                      {
                        id: 'mpB120akLnuhZvSrtHvkg',
                        word: 'disaster',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'middle',
                groups: [
                  {
                    id: 'XCr30VhumucyXel7ZVg0l',
                    mainWord: '1',
                    otherWords: [
                      {
                        id: 'lXlvzLXrm053dP_A-fi_f',
                        word: '111111111',
                      },
                      {
                        id: 'Bi1NmFJiPVKFDsvzQvSrc',
                        word: '11',
                      },
                    ],
                  },
                  {
                    id: 'hlDmKG350JScpZoXKn-9o',
                    mainWord: '2',
                    otherWords: [
                      {
                        id: '8bqyjhJEU2gvH0HW28UJA',
                        word: '222222222',
                      },
                      {
                        id: 'YyNGqjRs-s9c92TXQO2_W',
                        word: '22',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                groups: [
                  {
                    id: 'ktKEUfSgPY_fI8iN78rno',
                    mainWord: '44',
                    otherWords: [
                      {
                        id: '5fEE5NSXdJlM0B29e8leq',
                        word: '4444',
                      },
                      {
                        id: 'UGBBV1epEo6IXzOk1LkXv',
                        word: '44444',
                      },
                    ],
                  },
                  {
                    id: 'WN9mmHna1Icce8l66DE_G',
                    mainWord: '55',
                    otherWords: [
                      {
                        id: 'rB6Bn3Y4JokbM2Ahvyh9r',
                        word: '5555',
                      },
                      {
                        id: 'Hicgt4iurYkxc5q0ktxTq',
                        word: '5555',
                      },
                    ],
                  },
                  {
                    id: 'Tth_m6cCRaLYgodWyxJJc',
                    mainWord: '66',
                    otherWords: [
                      {
                        id: 'MPUrwz3GFx-jIgit9wt_E',
                        word: '6666',
                      },
                      {
                        id: 'qLHRboOvVBocBfkZVGNrI',
                        word: '66666',
                      },
                    ],
                  },
                ],
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
          },
          savedInLibrary: false,
        },
      ],
    },
    {
      id: '8f7iZjS3AZtbXz4XbPOYT',
      title: 'ch 1',
      blocks: [
        {
          type: 'custom',
          id: 'rsdM2n1mY_DP7dUWnq-6K',
          savedInLibrary: false,
          text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia&nbsp;</p>\n<ul>\n<li>deserunt&nbsp;</li>\n<li>mollit anim&nbsp;</li>\n</ul>\n<ol>\n<li>id&nbsp;</li>\n<li>est l</li>\n<ol>\n<li>aborum.</li>\n<li>bbbbbb</li>\n</ol>\n</ol>\n',
        },
      ],
    },
    {
      id: 'MRHdQdZfQQE8ddbooZJIs',
      title: '33',
      blocks: [],
    },
    {
      id: 'esrQm-KHhxoQKGFKx5VW3',
      title: '44',
      blocks: [],
    },
  ],
}

interface IBlocks {
  data: LessonType
  getBlocksInCurrentChapter: () => DataType
  isLoading: boolean
  isError: boolean
  error: string | null
  fetchBlocks: () => void
  selectedChapterID: string | null
  setSelectedChapterID: (id: string | null) => void
}
// { id: '', title: '', chapters: [] }

export const useBlocks = create<IBlocks>()(
  persist(
    devtools((set, get) => ({
      data: temporaryData as LessonType,
      isLoading: false,
      isError: false,
      error: null,
      selectedChapterID: null,
      fetchBlocks: async () => {
        try {
          set({ isLoading: true })
          const data = await getBlocks()
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
    { name: 'blocks' },
  ),
)
