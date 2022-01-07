import { useRef } from 'react'
import { Animated, Easing, PanResponder } from 'react-native'
import type { GestureResponderHandlers } from 'react-native'

interface ReturnValue {
  panHandlers: GestureResponderHandlers
  leftPosition: Animated.AnimatedInterpolation
  rotation: Animated.AnimatedInterpolation
}

const ANIMATION_DURATION = 200 // ms

const useSwipeableCard = (): ReturnValue => {
  const dragValue = useRef(new Animated.Value(0))

  const leftPosition = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-1000, 1000],
  })

  const rotation = dragValue?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-2, 2],
  })

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, _gestureState) => {
        const { dx } = _gestureState
        dragValue.current.setValue(dx)
      },
      onPanResponderRelease: (_event, _gestureState) => {
        Animated.timing(dragValue.current, {
          toValue: 0,
          duration: ANIMATION_DURATION, // ms
          useNativeDriver: false,
          easing: Easing.out(Easing.ease),
        }).start()
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current

  return { panHandlers: dragPanResponder.panHandlers, leftPosition, rotation }
}

export default useSwipeableCard
