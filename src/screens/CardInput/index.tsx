import { useState } from 'react'
import Button from '@components/Button'
import Separator from '@components/Separator'
import TextInput from '@components/TextInput'
import MainLayout from '@components/MainLayout'
import useNavigation from '@hooks/useNavigation'
import useGameController from '@hooks/useGameController'

const CardInputScreen: React.VFC = () => {
  const navigation = useNavigation()
  const { remainingCards: cardNumber, addCard } = useGameController()
  const [newCard, setNewCard] = useState('')

  const handleReady = () => {
    if (cardNumber === 0) return // TODO: Show user some message!
    navigation.push('MainGame')
  }

  const handleChangeText = (value: string) => {
    setNewCard(value)
  }

  const handleAddCard = () => {
    addCard(newCard)
    setNewCard('')
  }

  return (
    <MainLayout>
      <TextInput
        label="Add something to the bag!"
        placeholder="Character, movie, place..."
        value={newCard}
        onChangeText={handleChangeText}
      />
      <Button onPress={handleAddCard} color="green">
        ADD
      </Button>
      <Separator height={40} />
      <Button onPress={handleReady}>READY!</Button>
    </MainLayout>
  )
}

export default CardInputScreen
