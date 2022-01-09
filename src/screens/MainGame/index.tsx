import { useEffect } from 'react'
import MainLayout from '@components/MainLayout'
import Show from '@components/Show'
import Countdown from './Countdown'
import GameInterface from './GameInterface'
import { useIsFocused } from '@react-navigation/native'
import useGameController from '@hooks/useGameController'
import useGameCountdown from '@hooks/useGameCountdown'

const MainGame: React.VFC = () => {
  const isFocused = useIsFocused()
  const { startGame } = useGameController()
  const { countdown } = useGameCountdown()

  useEffect(() => {
    if (!isFocused) return
    startGame()
  }, [isFocused])

  return (
    <MainLayout>
      <Show when={countdown === 0} fallback={<Countdown countdown={countdown} />}>
        <GameInterface />
      </Show>
    </MainLayout>
  )
}

export default MainGame
