import { FC, useEffect } from 'react'
import { message, Spin } from 'antd'
import { useBlocks } from 'store'
import { StudentPlayer, TeacherPlayer } from 'pages'

export const App: FC = () => {
  const fetchBlocks = useBlocks((state) => state.fetchBlocks)
  const isLoading = useBlocks((state) => state.isLoading)
  const isError = useBlocks((state) => state.isError)
  const error = useBlocks((state) => state.error)

  // TODO get dataAPI from API
  useEffect(() => {
    //fetchBlocks()
  }, [])

  const role: 'student' | 'teacher' = 'student'

  return (
    <>
      {isLoading && <Spin size="large" fullscreen />}
      {isError && message.error(error)}
      {!isLoading && !isError && (
        <>
          {role === 'student' && <StudentPlayer />}
          {/* {role === 'teacher' && <TeacherPlayer />} */}
        </>
      )}
    </>
  )
}
