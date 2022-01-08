import { useNavigation as useRNNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'

type NavigationProp = StackNavigationProp<StackParamList>

const useNavigation = () => useRNNavigation<NavigationProp>()
export default useNavigation
