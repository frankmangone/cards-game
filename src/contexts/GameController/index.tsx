import { CardsProvider } from './Cards'
import { CountdownProvider } from './Countdown'
import { FinishProvider } from './Finish'
import { TimerProvider } from './Timer'

/**
 * GameControllerProvider
 *
 * The GameController provider wraps the game view to enable
 * component access to animated values and state. It centralizes
 * the game's logic.
 */
export const GameControllerProvider: React.FC = (props) => {
  const { children } = props

  return (
    <CardsProvider>
      <FinishProvider>
        <CountdownProvider>
          <TimerProvider>{children}</TimerProvider>
        </CountdownProvider>
      </FinishProvider>
    </CardsProvider>
  )
}
