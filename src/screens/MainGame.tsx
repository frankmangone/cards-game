import styled from 'styled-components/native'
import MainLayout from '@components/MainLayout'
import SwipeableCard from '@components/SwipeableCard'
import type { VFC } from 'react'

const ScreenWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

const MainGame: VFC = () => {
  return (
    <MainLayout>
      <ScreenWrapper>
        <SwipeableCard />
      </ScreenWrapper>
    </MainLayout>
  )
}

export default MainGame
