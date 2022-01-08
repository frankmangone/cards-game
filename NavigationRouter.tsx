import MainGameScreen from '@screens/MainGame'
import CardInputScreen from '@screens/CardInput'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const NavigationRouter: React.VFC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="CardInput">
        <Stack.Screen name="CardInput" component={CardInputScreen} />
        <Stack.Screen name="MainGame" component={MainGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRouter
