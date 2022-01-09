import styled from 'styled-components/native'
import Show from '@components/Show'

interface FakeCardStackProps {
  remainingCards: number
}

interface StackCardProps {
  stackPosition: 1 | 2 | 3 // Corresponds to z-index more or less
}

/**
 * This exists only so that the cards' opacities don't
 * allow the user to see the ones behind!
 */
const Wrapper = styled.View<StackCardProps>`
  background-color: ${(props) => props.theme.getColor('primary')};
  border-radius: 10px;
  overflow: hidden;
  z-index: ${(props) => props.stackPosition};

  ${(props) => {
    switch (props.stackPosition) {
      case 3:
        return `
          width: 280px;
          height: 160px;
          margin-top: -148px;
        `
      case 2:
        return `
          width: 260px;
          height: 150px;
          margin-top: -138px;
        `
      case 1:
        return `
          width: 240px;
          height: 140px;
          margin-top: -128px;
        `
    }
  }};
`

const Inner = styled.View<StackCardProps>`
  background-color: ${(props) => props.theme.getColor('white')}};
  border: 3px solid ${(props) => props.theme.getColor({ name: 'black', opacity: 5 })};
  opacity: ${(props) => {
    switch (props.stackPosition) {
      case 3:
        return 0.8
      case 2:
        return 0.6
      case 1:
        return 0.4
    }
  }};
  border-radius: 10px;
  width: 100%;
  flex: 1;
`

const StackCard: React.VFC<StackCardProps> = (props) => {
  return (
    <Wrapper {...props}>
      <Inner {...props} />
    </Wrapper>
  )
}

const FakeCardStack: React.VFC<FakeCardStackProps> = (props) => {
  const { remainingCards } = props

  return (
    <>
      <Show when={remainingCards > 1}>
        <StackCard stackPosition={3} />
      </Show>
      <Show when={remainingCards > 2}>
        <StackCard stackPosition={2} />
      </Show>
      <Show when={remainingCards > 3}>
        <StackCard stackPosition={1} />
      </Show>
    </>
  )
}

export default FakeCardStack
