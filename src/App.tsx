import { FC, useEffect } from 'react'
import { message, Spin } from 'antd'
import { useBlocks } from 'store'
import { StudentPlayer, TeacherPlayer } from 'pages'
import { useBubbleState } from 'provider'
import { ComponentStateType } from 'main'

export const App: FC = () => {
  const fetchBlocks = useBlocks((state) => state.fetchBlocks)
  const isLoading = useBlocks((state) => state.isLoading)
  const isError = useBlocks((state) => state.isError)
  const error = useBlocks((state) => state.error)

  const state = useBubbleState<ComponentStateType>()

  useEffect(() => {
    fetchBlocks(state.apiKey, state.versionId)
  }, [])

  console.log('value from Bubble State Manager:', state.value)
  console.log('apiKey from Bubble State Manager:', state.apiKey)
  console.log('versionId from Bubble State Manager:', state.versionId)

  return (
    <>
      {isLoading && <Spin size="large" fullscreen />}
      {isError && message.error(error)}
      {!isLoading && !isError && (
        <>
          {state.role === 'student' && <StudentPlayer />}
          {state.role === 'teacher' && <TeacherPlayer />}
        </>
      )}
    </>
  )
}
