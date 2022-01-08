import MainLayout from '@components/MainLayout'
import { GameControllerProvider } from './GameController'
import GameInterface from './GameInterface'
import type { VFC } from 'react'

const MainGame: VFC = () => {
  return (
    <GameControllerProvider>
      <MainLayout>
        <GameInterface />
      </MainLayout>
    </GameControllerProvider>
  )
}

export default MainGame
