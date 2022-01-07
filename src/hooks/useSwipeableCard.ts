import { useState, useRef } from 'react'
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
  const { onPass, onGuess } = options // eslint-disable-line

  const dragValue = useRef(new Animated.Value(0))

  const [action, setAction] = useState<Maybe<'guess' | 'pass'>>(null) // eslint-disable-line
  const handlePass = () => setAction('pass') // eslint-disable-line
  const handleGuess = () => setAction('guess') // eslint-disable-line

  const leftPosition = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-1000, 1000],
  })

  const rotation = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-2, 2],
  })

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

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, gestureState) => {
        const { dx } = gestureState
        dragValue.current.setValue(dx)
      },
      onPanResponderRelease: (_event, gestureState) => {
        if (gestureState.dx > 100) {
          animateToValue(1000)
          return
        }

        if (gestureState.dx < 100) {
          animateToValue(-1000)
          return
        }

        animateToValue(0)
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current

  return { panHandlers: dragPanResponder.panHandlers, leftPosition, rotation }
}

export default useSwipeableCard
