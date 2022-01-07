import { useRef } from 'react'
import { Animated, Easing, PanResponder } from 'react-native'

const ANIMATION_DURATION = 200 // ms

const useSwipeableCard = () => {
  const dragPosition = useRef(new Animated.Value(0))
  const leftPosition = dragPosition?.current.interpolate({
    inputRange: [-1000, 1000],
    outputRange: [-1000, 1000],
  })

  const dragPanResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_event, _gestureState) => {
        const { dx } = _gestureState
        dragPosition.current.setValue(dx)
      },
      onPanResponderRelease: (_event, _gestureState) => {
        Animated.timing(dragPosition.current, {
          toValue: 0,
          duration: ANIMATION_DURATION, // ms
          useNativeDriver: false,
          easing: Easing.out(Easing.ease),
        }).start()
      },
      onPanResponderTerminationRequest: () => false,
    })
  ).current

  return { panHandlers: dragPanResponder.panHandlers, leftPosition }
}

export default useSwipeableCard
