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
          id: '0qfKQ6Wof8eYAMMnAAR8n',
          type: 'trueOrFalseTask',
          taskData: {
            title: 'true /false',
            description: '44 ddddd 3333 fffff ',
            taskText: [
              {
                difficultyLevel: 'easy',
                taskItemData: {
                  id: 'eYZBnE9wW_4uADnsRHawH',
                  format: 'trueOrFalse',
                  question:
                    'Since 1777, the USA flag was officially modified 26 times. The first flag had 13 stripes and 13 stars arranged in a circle',
                  answer: true,
                },
              },
              {
                difficultyLevel: 'middle',
                taskItemData: {
                  id: 'baS8i7-W0g1atyVepwK5S',
                  format: 'trueOrFalse',
                  question: 'Nenn mir den letzten Hauch der Unendlichkeit',
                  answer: false,
                },
              },
              {
                difficultyLevel: 'hard',
                taskItemData: {
                  id: '8xZHgFXDYtKPVLty9A0PO',
                  format: 'yesOrNo',
                  question: 'Schwarz, schwarz ist alles was ich bin',
                  answer: false,
                },
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
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
        {
          id: 'EYHTjwsIEFz7h99ucf0Qi',
          type: 'rightAnswerTask',
          taskData: {
            title: 'correct answer',
            description: 'ююююю correct answer gggggggg',
            taskText: [
              {
                taskQuestion:
                  '<span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">Heisenberg went to the Maximilian school at Munich until 1920, when he&nbsp;</span>&nbsp;<div contenteditable="false" class="skip" data-skip="w19NNQulsinao0Vgi7F8N"><span class="circle">1</span><span class="line"></span></div>&nbsp;<span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">&nbsp;to the University of Munich to study physics under Sommerfeld, Wien, Pringsheim, and Rosenthal. During the winter of 1922-1923 he went to Göttingen to study physics under&nbsp;</span><a style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; transition-duration: 0.2s; transition-property: all; color: var(--lochMara);">Max Born</a><span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">,&nbsp;</span><a style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; transition-duration: 0.2s; transition-property: all; color: var(--lochMara);">Franck</a><span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">, and Hilbert. In 1923 he took&nbsp;</span>&nbsp;<div contenteditable="false" class="skip" data-skip="YUul_ME8jSBwJOXX8HxGL"><span class="circle">2</span><span class="line"></span></div>&nbsp;<span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">&nbsp;Ph.D. at the University of Munich and then&nbsp;</span>&nbsp;<div contenteditable="false" class="skip" data-skip="CFZGwnYv-TpnfnXJxs6JT"><span class="circle">3</span><span class="line"></span></div>&nbsp;<span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">&nbsp;Assistant to Max Born at the University of Göttingen, and in 1924 he gained the&nbsp;</span><i style="box-sizing: inherit; -webkit-font-smoothing: antialiased; border: 0px; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-variant-alternates: inherit; font-variant-position: inherit; font-stretch: inherit; line-height: inherit; font-family: var(--secondary-font-italic); font-optical-sizing: inherit; font-kerning: inherit; font-feature-settings: inherit; font-variation-settings: inherit; font-size: 18px; vertical-align: baseline; color: rgb(46, 42, 37);">venia legendi</i><span style="color: rgb(46, 42, 37); font-family: &quot;Alfred Serif Regular&quot;, Times, &quot;Times New Roman&quot;, serif; font-size: 18px;">&nbsp;at that University.</span>',
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
                    id: 'YUul_ME8jSBwJOXX8HxGL',
                    answers: [
                      {
                        id: '59GM3dcE84G5eYV_IBT1z',
                        type: 'correct',
                        value: 'his',
                      },
                      {
                        type: 'incorrect',
                        id: '-1TIB_QoDB-fduDxTOLIW',
                        value: 'her',
                      },
                      {
                        type: 'incorrect',
                        id: 'c_ix8eT-mPTixAr2_5gNO',
                        value: 'them',
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
              {
                difficultyLevel: 'middle',
                taskQuestion:
                  '<div>Glück verlässt mich Herz verlässt&nbsp; mich&nbsp; Alles lässt mich Verlässt mich Glück verlässt mich</div>',
                taskAnswers: [],
              },
              {
                difficultyLevel: 'hard',
                taskQuestion: "&nbsp;Feine Seele, ach so nackt Und ob ich steh', ganz ohne Haut",
                taskAnswers: [],
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
          },
          savedInLibrary: false,
        },
        {
          id: '6coLY_FYKKSBWqkOSVmOq',
          type: 'onlyOneOrTwoRightAnswerTask',
          taskData: {
            title: 'one right answer',
            description: '44 ddddd 3333 fffff ',
            taskText: [
              {
                difficultyLevel: 'easy',
                taskQuestion:
                  '&nbsp;If I&nbsp;&nbsp;<div data-skip="1AX_4yIsfhqZMCIOi1I5y" class="skip" contenteditable="false"><span class="circle">1</span><span class="line"></span></div>&nbsp;&nbsp;for a promotion, I&nbsp;&nbsp;<div data-skip="Vc3U4CQS4Cz6PycQJT-nR" class="skip" contenteditable="false"><span class="circle">2</span><span class="line"></span></div>&nbsp;&nbsp;a head of my department.&nbsp;',
                taskAnswers: [
                  {
                    id: '1AX_4yIsfhqZMCIOi1I5y',
                    answers: [
                      {
                        id: 'VKIg-2u7ydmGjCyqzgDmE',
                        type: 'correct',
                        value: 'had asked',
                      },
                      {
                        type: 'incorrect',
                        id: 'uQP5y0OpUWNztS_qQTDbl',
                        value: 'had ask',
                      },
                      {
                        type: 'incorrect',
                        id: 'bn23kr1w2PecQMo357ndf',
                        value: 'ask',
                      },
                      {
                        type: 'incorrect',
                        id: 'rhWj2ijLFQdMGkK0PZEeM',
                        value: 'have asked',
                      },
                    ],
                  },
                  {
                    id: 'Vc3U4CQS4Cz6PycQJT-nR',
                    answers: [
                      {
                        id: 'zzWcO4KeGby35IGxtMzf1',
                        type: 'correct',
                        value: 'would have become',
                      },
                      {
                        id: '-51McKUYNSqqs746g1L2z',
                        type: 'incorrect',
                        value: 'would had become',
                      },
                      {
                        id: 'gHYKthfNrR5icJzYoW22M',
                        type: 'incorrect',
                        value: 'have become',
                      },
                      {
                        id: '_qSllnoP7NXvpBinr_E-r',
                        type: 'incorrect',
                        value: 'would become',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'middle',
                taskQuestion:
                  '&nbsp;When your component&nbsp;&nbsp;<div data-skip="l_9DzJUNh44B8xfQPzaZ_" class="skip" contenteditable="false"><span class="circle">1</span><span class="line"></span></div>&nbsp;&nbsp;added&nbsp;&nbsp;<div data-skip="7zyAih5XX6zpZHHtBzYCs" class="skip" contenteditable="false"><span class="circle">2</span><span class="line"></span></div>&nbsp;&nbsp;the DOM, React will run your setup function.&nbsp;',
                taskAnswers: [
                  {
                    id: 'l_9DzJUNh44B8xfQPzaZ_',
                    answers: [
                      {
                        id: 'fLmuD956-Jr4USyNuJksG',
                        type: 'correct',
                        value: 'is',
                      },
                      {
                        type: 'incorrect',
                        id: 'fIG3lVGnt3KP6E-3lYwYl',
                        value: 'was',
                      },
                      {
                        type: 'incorrect',
                        id: 'qsgm98NEwnSBB4dUMOrYY',
                        value: 'are',
                      },
                      {
                        type: 'incorrect',
                        id: 'r8tWBvQ20jJe5ROu-DJqC',
                        value: 'were',
                      },
                    ],
                  },
                  {
                    id: '7zyAih5XX6zpZHHtBzYCs',
                    answers: [
                      {
                        id: '_QnPMvZVgwVRub9u3_vL7',
                        type: 'correct',
                        value: 'to',
                      },
                      {
                        id: '5IrXmsQi7Jmo1N_Xd--vj',
                        type: 'incorrect',
                        value: 'in',
                      },
                      {
                        id: 'zVbG2pIk7RMAOLNZ8Evcf',
                        type: 'incorrect',
                        value: 'on',
                      },
                      {
                        id: 'r6Ba9wk2Vqzakp1Nlr44d',
                        type: 'incorrect',
                        value: 'at',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                taskQuestion:
                  '&nbsp;The convention is to name state variables like [something, setSomething] using&nbsp;&nbsp;<div data-skip="6GVRPoAzIfHdfvE1jn8ex" class="skip" contenteditable="false"><span class="circle">1</span><span class="line"></span></div>&nbsp;&nbsp;destructuring.',
                taskAnswers: [
                  {
                    id: '6GVRPoAzIfHdfvE1jn8ex',
                    answers: [
                      {
                        id: 'a8ignYdjh4YZHLk2CMUCz',
                        type: 'correct',
                        value: 'array',
                      },
                      {
                        type: 'incorrect',
                        id: 'bqCDIsJghLVbT4AacdYRJ',
                        value: 'object',
                      },
                      {
                        type: 'incorrect',
                        id: 'fJtVLSE94dH94dqd5abKO',
                        value: 'hash-table',
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
        {
          id: 'hQXup1M3zM4psX5Oo6I9o',
          type: 'onlyOneOrTwoRightAnswerTask',
          taskData: {
            title: 'one right answer',
            description: 'one right answer one right answer one right answer',
            taskText: [
              {
                taskQuestion:
                  '&nbsp;If I&nbsp;&nbsp;<div data-skip="IRG1LIAJx9z6OKxul7SYy" class="skip" contenteditable="false"><span class="circle">1</span><span class="line"></span></div>&nbsp;&nbsp;more money, I\'d travel more.<div><br></div>',
                taskAnswers: [
                  {
                    id: 'IRG1LIAJx9z6OKxul7SYy',
                    answers: [
                      {
                        id: '5NfJwsQ9o4d8l6HqXs73L',
                        type: 'correct',
                        value: 'had',
                      },
                      {
                        type: 'incorrect',
                        id: 'YvAQIV-llzuYYYd2Yg4gE',
                        value: 'have',
                      },
                      {
                        type: 'incorrect',
                        id: '56Jx0ydfBToUaHHcOVHd6',
                        value: 'would have',
                      },
                    ],
                  },
                ],
                difficultyLevel: 'easy',
              },
            ],
            parameters: ['oneDifficultyLevel'],
          },
          savedInLibrary: false,
        },
        {
          id: 'd3IobbQ5HaSFC_dN6Idh5',
          type: 'typeAnswerTask',
          taskData: {
            title: 'type correct answer',
            description: '44 ddddd 3333 fffff ',
            taskText: [
              {
                difficultyLevel: 'easy',
                taskQuestion:
                  '&nbsp;I&nbsp;&nbsp;<div data-skip="oAuiOvBfJBC7DmpM20CYi" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;while I&nbsp;&nbsp;<div data-skip="oA6IxKSlazricYUaGoRqL" class="skip" contenteditable="false"><span class="circle">2</span><span class="rectangle"></span></div>&nbsp;&nbsp;down the stairs.<div><br></div>',
                taskAnswers: [
                  {
                    id: 'oAuiOvBfJBC7DmpM20CYi',
                    answers: [
                      {
                        id: 'XVgho8BFCCPZDjQ3-fQjY',
                        type: 'correct',
                        value: 'fell down',
                      },
                    ],
                  },
                  {
                    id: 'oA6IxKSlazricYUaGoRqL',
                    answers: [
                      {
                        id: 'Mri1aRDFrTSUCrFxN_gva',
                        type: 'correct',
                        value: 'was going',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'middle',
                taskQuestion:
                  'I&nbsp;&nbsp;<div data-skip="ci9oI2Ptk9-hYFoTBmupF" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;&nbsp;Peter last night.<div><br></div><div>Oh really. I&nbsp;&nbsp;<div data-skip="z8UmKNxlyGbocHjCGNzST" class="skip" contenteditable="false"><span class="circle">2</span><span class="rectangle"></span></div>&nbsp;him since last summer. Is he OK?</div>',
                taskAnswers: [
                  {
                    id: 'ci9oI2Ptk9-hYFoTBmupF',
                    answers: [
                      {
                        id: 'ghDR88y6My2azU5puKc2f',
                        type: 'correct',
                        value: 'saw',
                      },
                    ],
                  },
                  {
                    id: 'z8UmKNxlyGbocHjCGNzST',
                    answers: [
                      {
                        id: 'COdOriH80VX5ZrwQllP_Z',
                        type: 'correct',
                        value: "haven't seen ",
                      },
                      {
                        type: 'correct',
                        id: 'kLCKVz-_G4IQJrB9w0F8N',
                        value: 'have not seen',
                      },
                    ],
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                taskQuestion:
                  '&nbsp;Lorem&nbsp;&nbsp;<div data-skip="HOXu1m3blzUEwM5yqwj1I" class="skip" contenteditable="false"><span class="circle">1</span><span class="rectangle"></span></div>&nbsp;&nbsp;dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                taskAnswers: [
                  {
                    id: 'HOXu1m3blzUEwM5yqwj1I',
                    answers: [
                      {
                        id: 'PWCahtkAwD0G01HwurCml',
                        type: 'correct',
                        value: 'ipsum',
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
      blocks: [
        {
          id: 'H2QCqsQsBmyhSSTYz4dJ-',
          type: 'sortDialogue',
          taskData: {
            title: 'sord dialogue',
            description: "Das war's dann. Du musst nach unten gehen.",
            taskText: [
              {
                sentences: [
                  {
                    id: 'FYZzLZaEbdLMHmjTrq6Hd',
                    sentence: 'Katrine nodded. ‘You’re good, Harry.’ ',
                  },
                  {
                    id: 'dGKkdCbhAZpDaU0fQMl48',
                    sentence:
                      'He shook his head. ‘If I were I would have solved this case long ago. I was wrong every step of the way.’ ',
                  },
                  {
                    id: 'OLqcS46XWDCJbTAG3NLni',
                    sentence:
                      ' ‘So you say, but I happen to know there are other people who rate you as well.’ ',
                  },
                  {
                    id: 'LrPcM3uxY_wf7Yl6ZT0Un',
                    sentence: ' ‘OK.’ ',
                  },
                ],
                difficultyLevel: 'easy',
              },
              {
                difficultyLevel: 'middle',
                sentences: [
                  {
                    id: 'miZcCokjKXecR1ZjBrdCG',
                    sentence:
                      ' And it’s these others I’d like to talk to you about. There’s a vacancy in Crime Squad. We’d all like you to apply for it.',
                  },
                  {
                    id: 'dQKhrw0_1PyLE3QAsLjka',
                    sentence: ' We?',
                  },
                  {
                    id: 'IxQou9XfWeq4Nl2G_X-Tr',
                    sentence: ' Bodil Melling and me.',
                  },
                  {
                    id: '3b8nnXCbnDivm0m7RJcWl',
                    sentence: ' That’s “both”, you said “all”.',
                  },
                  {
                    id: 'SP0EUEQ-_dw6eKSO2-IPy',
                    sentence:
                      'Mikael Bellman has mentioned it might be a good idea. That we could create a special position. A freer role. You could even start with this murder in Frogner.',
                  },
                  {
                    id: 'GH2tYRY5st2C6i1lbCoje',
                    sentence: 'Any suspects?',
                  },
                  {
                    id: 'WOeh0XN6ptsYtbbtsyNmt',
                    sentence:
                      'The victim had a long-standing inheritance dispute with his brother. The brother is being questioned right now, but he has an alibi apparently.',
                  },
                ],
              },
              {
                difficultyLevel: 'hard',
                sentences: [
                  {
                    id: 'yGrl3k15usw_qZeJM2gtv',
                    sentence: 'Give my regards and say thanks he said. ‘But no thanks.’ ',
                  },
                  {
                    id: 'MTyCiKGaVFAv2e3BgcQ9d',
                    sentence: 'Why not?',
                  },
                  {
                    id: 'xBQaIS7PKrXB-WHc8feZz',
                    sentence:
                      'Harry gave a wry smile. ‘I’ve realised during this case that I’m only good for one thing, and that’s catching serial killers. Real ones. Statistically, you’ll pass a serial killer on the street just seven times in the course of a lifetime. In which case I’ve used up mine. There aren’t going to be any more turning up.',
                  },
                ],
              },
            ],
            parameters: ['withCheck', 'passAgain', 'randomPlacement'],
          },
          savedInLibrary: false,
        },
        {
          id: 'omsLTyYbhCpVrXEbwLUVO',
          type: 'correctMistakesTask',
          taskData: {
            title: 'correct centence',
            description: '44 ddddd 3333 correct cypkb, v/ gvm b8,iipo',
            taskText: [
              {
                difficultyLevel: 'easy',
                wrongSentence: "If you use the map, we wouldn't got lost",
                correctSentence: "If you had used the map, we wouldn't have got lost",
              },
              {
                difficultyLevel: 'middle',
                correctSentence:
                  "What would you do if you found a lot of money in the street\nI wouldn't drink that milk if I were you.\n",
                wrongSentence:
                  "What would you do if you find a lot of money in the street\nI wouldn't drink that milk if I will be you.\n",
              },
              {
                difficultyLevel: 'hard',
                correctSentence: "She'll miss the bus if she doesn't leave soon.",
                wrongSentence: "She'll miss the bus if she don`t leave soon.",
              },
            ],
            parameters: ['withCheck', 'passAgain'],
          },
          savedInLibrary: false,
        },
      ],
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
