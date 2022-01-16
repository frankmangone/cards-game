import { createContext, useState } from 'react'

interface FinishContextValues {
  isFinishedState: ReactState<boolean>
  isStartedState: ReactState<boolean>
}

const defaultValue: FinishContextValues = {
  isFinishedState: [false, () => {}],
  isStartedState: [false, () => {}],
}
const FinishContext = createContext<FinishContextValues>(defaultValue)

export default FinishContext

export const FinishProvider: React.FC = (props) => {
  const { children } = props
  const isFinishedState = useState<boolean>(false)
  const isStartedState = useState<boolean>(false)

  const context = { isFinishedState, isStartedState }

  return <FinishContext.Provider value={context}>{children}</FinishContext.Provider>
}
