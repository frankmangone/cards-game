import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, PanResponder } from 'react-native'
import useGameCards from '@hooks/useGameCards'
import type { GestureResponderHandlers } from 'react-native'

interface HookOptions {
  onPass: () => void
  onGuess: () => void
}

interface ReturnValue {
  panHandlers: GestureResponderHandlers
  leftPosition: Animated.AnimatedInterpolation
  rotation: Animated.AnimatedInterpolation
}

const ANIMATION_DURATION = 200 // ms

const useSwipeableCard = (options: HookOptions): ReturnValue => {
  const { onPass, onGuess } = options

  const { dragValue, WIDTH, SWIPE_THRESHOLD } = useGameCards()
  const CARD_BOUNDARY = WIDTH * 2

  const [action, setAction] = useState<Maybe<'guess' | 'pass'>>(null)
  const handlePass = () => setAction('pass')
  const handleGuess = () => setAction('guess')

  const leftPosition = dragValue.interpolate({
    inputRange: [-CARD_BOUNDARY, CARD_BOUNDARY],
    outputRange: [-CARD_BOUNDARY, CARD_BOUNDARY],
  })

  const rotation = dragValue.interpolate({
    inputRange: [-CARD_BOUNDARY, CARD_BOUNDARY],
    outputRange: [-0.6, 0.6],
  })

  /**
   * animateToValue
   *
   * Basically a method to reuse the animation setup, and keeping things DRY
   */
  const animateToValue = (value: number, callback?: () => void) => {
    Animated.timing(dragValue, {
      toValue: value,
      duration: ANIMATION_DURATION, // ms
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      callback?.()
    })
  }

  /**
   * popNewCard
   *
   * After guessing / passing, shows the player a new card by resetting its position
   */
  const popNewCard = () => dragValue.setValue(0)

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, gestureState) => {
        const { dx } = gestureState
        dragValue.setValue(dx)
      },
      onPanResponderRelease: (_event, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          // Guess
          animateToValue(CARD_BOUNDARY, handleGuess)
          return
        }

        if (gestureState.dx < -SWIPE_THRESHOLD) {
          // Pass
          animateToValue(-CARD_BOUNDARY, handlePass)
          return
        }

        animateToValue(0)
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current

  /**
   * Handles passing / guessing as a side effect
   */
  useEffect(() => {
    if (!action) return

    if (action === 'pass') onPass()
    else onGuess()

    setAction(null)
    popNewCard()
  }, [action])

  return { panHandlers: dragPanResponder.panHandlers, leftPosition, rotation }
}

export default useSwipeableCard
