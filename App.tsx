import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MainGameScreen from '@screens/MainGame'

const App = () => {
  return (
    <View style={styles.container}>
      <MainGameScreen />
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
