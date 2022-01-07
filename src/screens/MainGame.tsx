import MainLayout from '@components/MainLayout'
import SwipeableCard from '@components/SwipeableCard'
import type { VFC } from 'react'

const MainGame: VFC = () => {
  return (
    <MainLayout>
      <SwipeableCard />
    </MainLayout>
  )
}

export default MainGame
