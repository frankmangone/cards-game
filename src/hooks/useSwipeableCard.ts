import { useEffect, useRef, useState } from 'react'
import { Animated, Easing, PanResponder } from 'react-native'
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

  const dragValue = useRef(new Animated.Value(0))

  const [action, setAction] = useState<Maybe<'guess' | 'pass'>>(null)
  const handlePass = () => setAction('pass')
  const handleGuess = () => setAction('guess')

  const leftPosition = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-1000, 1000],
  })

  const rotation = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-2, 2],
  })

  /**
   * animateToValue
   *
   * Basically a method to reuse the animation setup, and keeping things DRY
   */
  const animateToValue = (value: number, callback?: () => void) => {
    Animated.timing(dragValue.current, {
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
  const popNewCard = () => dragValue.current.setValue(0)

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, gestureState) => {
        const { dx } = gestureState
        dragValue.current.setValue(dx)
      },
      onPanResponderRelease: (_event, gestureState) => {
        if (gestureState.dx > 100) {
          // Guess
          animateToValue(1000, handleGuess)
          return
        }

        if (gestureState.dx < 100) {
          // Pass
          animateToValue(-1000, handlePass)
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
