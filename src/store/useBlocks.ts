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
          id: 'jTAKgmjd57Ldjk2S0WeUf',
          type: 'orderSplitSentence',
          taskData: {
            title: 'split sencense',
            description: 'correct order',
            taskText: [
              {
                difficultyLevel: 'easy',
                taskQuestion:
                  'The first difference between a homicide case and other cases is that the victim of the crime isn’t there at trial.',
              },
              {
                difficultyLevel: 'middle',
                taskQuestion:
                  'Part of the job in defending a homicide case is to recognize and prepare for the emotional reactions of the jury, judge, and prosecutors to the case.',
              },
              {
                difficultyLevel: 'hard',
                taskQuestion: 'We need to understand any systemic patterns.',
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
          },
          savedInLibrary: false,
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
      blocks: [
        {
          id: 'EYHTjwsIEFz7h99ucf0Qi',
          type: 'rightAnswerTask',
          taskData: {
            title: 'correct answer',
            description: 'ююююю correct answer gggggggg',
            taskText: [
              {
                taskQuestion:
                  '<span>Heisenberg went to the Maximilian school at Munich until 1920, when he&nbsp;</span>&nbsp;<div contenteditable="false" class="skip" data-skip="w19NNQulsinao0Vgi7F8N"><span class="circle">1</span><span class="line"></span></div>&nbsp;<span>&nbsp;to the University of Munich to study physics under Sommerfeld, Wien, Pringsheim, and Rosenthal. During the winter of 1922-1923 he went to Göttingen to study physics under&nbsp;</span><a style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; transition-duration: 0.2s; transition-property: all; color: var(--lochMara);">Max Born</a><span>,&nbsp;</span><a style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; transition-duration: 0.2s; transition-property: all; color: var(--lochMara);">Franck</a><span>, and Hilbert. In 1923 he took his Ph.D. at the University of Munich and then&nbsp;</span>&nbsp;<div contenteditable="false" class="skip" data-skip="CFZGwnYv-TpnfnXJxs6JT"><span class="circle">2</span><span class="line"></span></div>&nbsp;<span>&nbsp;Assistant to Max Born at the University of Göttingen, and in 1924 he gained the&nbsp;</span><i style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: var(--secondary-font-italic); font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; color: rgb(46, 42, 37);">venia legendi</i><span>&nbsp;at that University.</span>',
                taskAnswers: [
                  {
                    id: 'w19NNQulsinao0Vgi7F8N',
                    answers: [
                      {
                        id: 'RKZcRcWZDiIT2q_Y7D-0F',
                        type: 'correct',
                        value: 'went',
                      },
                      {
                        type: 'incorrect',
                        id: 'qTq2SUOsxOdaV2JDrZ6BC',
                        value: 'go',
                      },
                      {
                        type: 'incorrect',
                        id: 'SBlPxBVZ8wvFVh_McycZj',
                        value: 'did go',
                      },
                      {
                        type: 'incorrect',
                        id: 'UVzvRfAxXgHL-Cvaboy3N',
                        value: 'had went',
                      },
                    ],
                  },
                  {
                    id: 'CFZGwnYv-TpnfnXJxs6JT',
                    answers: [
                      {
                        id: 'OfFAfXaYi2Ou6Dxqexejn',
                        type: 'correct',
                        value: 'became',
                      },
                      {
                        type: 'incorrect',
                        id: '-NV5L42aFCjxV0HWZF17x',
                        value: 'become',
                      },
                      {
                        type: 'incorrect',
                        id: 'X1ONxwWzKBQcdYpEBdtnV',
                        value: 'was',
                      },
                    ],
                  },
                ],
                difficultyLevel: 'easy',
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement', 'oneDifficultyLevel'],
          },
          savedInLibrary: false,
        },
        {
          id: 'bbbAGUheKh3LqERsGEtgr',
          type: 'answerFromSelect',
          taskData: {
            title: 'choose from select',
            description: 'ff vchb v ff vchb v ff vchb v',
            taskText: [
              {
                difficultyLevel: 'easy',
                taskQuestion:
                  '&nbsp;Werner Heisenberg&nbsp;&nbsp;<div data-skip="VEjU8nh16r0wJcl7w-i1g" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;&nbsp;born on 5th December,&nbsp;&nbsp;<div data-skip="8O23GUv9Kn07riiOmFgRh" class="skip" contenteditable="false"><span class="circle">2</span><span class="rectangle"></span></div>&nbsp;, at Würzburg. He was the son of Dr. August Heisenberg and his wife Annie Wecklein. His father later became Professor of the Middle and Modern Greek languages in the University of Munich. It was probably due to his influence that Heisenberg remarked, when the Japanese physicist Yukawa discovered the particle now known as the meson and the term “mesotron” was proposed for it, that the Greek word “mesos” has no “tr” in it, with&nbsp;&nbsp;<div data-skip="HpmCKi4L7Doxy4J0hPoTW" class="skip" contenteditable="false"><span class="circle">3</span><span class="rectangle"></span></div>&nbsp;&nbsp;result that the name “mesotron” was changed to “meson”.',
                taskAnswers: [
                  {
                    id: 'VEjU8nh16r0wJcl7w-i1g',
                    answers: [
                      {
                        id: 'yWehf2yunEyIpkhT2v4k_',
                        type: 'correct',
                        value: 'was',
                      },
                      {
                        type: 'incorrect',
                        id: 'SfPWD4J91zFgvhJ5hQDeK',
                        value: 'would',
                      },
                      {
                        type: 'incorrect',
                        id: 'xk2v9QH0Jk4zdORKsK4QN',
                        value: 'were',
                      },
                      {
                        type: 'incorrect',
                        id: 'x3uJoX1H3N1u3x-nHjVvQ',
                        value: 'is',
                      },
                      {
                        type: 'incorrect',
                        id: 'zUbYtnwbphqc6cW2SpdlL',
                        value: 'are',
                      },
                    ],
                  },
                  {
                    id: '8O23GUv9Kn07riiOmFgRh',
                    answers: [
                      {
                        id: 'Hmnkf4_MrTJwJMrwx0nZO',
                        type: 'correct',
                        value: '1901',
                      },
                      {
                        type: 'incorrect',
                        id: '87_eNxJxpV7rNZDj-Seuw',
                        value: '1910',
                      },
                      {
                        type: 'incorrect',
                        id: 'rGh4gmTja38yzw9nSRLFg',
                        value: '1915',
                      },
                      {
                        type: 'incorrect',
                        id: 'BpqeB8-p-MDQOYgbafh14',
                        value: '1933',
                      },
                    ],
                  },
                  {
                    id: 'HpmCKi4L7Doxy4J0hPoTW',
                    answers: [
                      {
                        id: 'OZbUyahkT1GlLrpgzZorr',
                        type: 'correct',
                        value: 'the',
                      },
                      {
                        type: 'incorrect',
                        id: '8IY0edSW5m6xMYFaVBDbm',
                        value: 'a',
                      },
                      {
                        type: 'incorrect',
                        id: 'AkECCFJP7E4bx8BDxiG0k',
                        value: '-',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'middle',
                taskQuestion:
                  '&nbsp;Lorem ipsum dolor sit amet,&nbsp;&nbsp;<div data-skip="u4tHgthdtIMy6K79Q-CCm" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                taskAnswers: [
                  {
                    id: 'u4tHgthdtIMy6K79Q-CCm',
                    answers: [
                      {
                        id: '7LDQ_xtqGcrb7XjaixawW',
                        type: 'correct',
                        value: '11111',
                      },
                      {
                        type: 'incorrect',
                        id: 'GKy8hBx4NOYFF2y5thjDK',
                        value: '22222',
                      },
                      {
                        type: 'incorrect',
                        id: 'EwgWfJ_iS-1a7vQHwpMHc',
                        value: '333333',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                taskQuestion:
                  '&nbsp;Sed ut perspiciatis,&nbsp;<div data-skip="IvxZ-qW7YnIU5H643N6MT" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;&nbsp;unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non&nbsp;<div data-skip="c2II1bxsym20ee6aP7Q1l" class="skip" contenteditable="false"><span class="circle">2</span><span class="rectangle"></span></div>&nbsp;&nbsp;numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
                taskAnswers: [
                  {
                    id: 'IvxZ-qW7YnIU5H643N6MT',
                    answers: [
                      {
                        id: 'srMoMsZ-g_EnkUWMOo7oQ',
                        type: 'correct',
                        value: '1111',
                      },
                      {
                        type: 'incorrect',
                        id: 'FAuLQ56Ku7u5shdiorWn0',
                        value: '22222',
                      },
                      {
                        type: 'incorrect',
                        id: 'HlkCQafg9BoBVd4vqPjHX',
                        value: '33333',
                      },
                      {
                        type: 'incorrect',
                        id: '5molKAX4XXhAVgns2tVZv',
                        value: '4444444',
                      },
                      {
                        type: 'incorrect',
                        id: 'ruvA02K-Gm8sPnz5bMONe',
                        value: '55555',
                      },
                    ],
                  },
                  {
                    id: 'c2II1bxsym20ee6aP7Q1l',
                    answers: [
                      {
                        id: 'C18_hqIkzgYDoQPKWdhrT',
                        type: 'correct',
                        value: 'must',
                      },
                      {
                        type: 'incorrect',
                        id: 'PlW7DkAqUMmS0T6EtI-yr',
                        value: 'should',
                      },
                      {
                        type: 'incorrect',
                        id: 'ePJ45cu01byz1xX9MYtfv',
                        value: 'have to',
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
