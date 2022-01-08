import Button from '@components/Button'
import MainLayout from '@components/MainLayout'
import useNavigation from '@hooks/useNavigation'

const CardInputScreen: React.VFC = () => {
  const navigation = useNavigation()

  const handleReady = () => {
    navigation.push('MainGame')
  }

  return (
    <MainLayout>
      <Button onPress={handleReady}>Ready!</Button>
    </MainLayout>
  )
}

export default CardInputScreen
