import { createContext, useState } from 'react'

type FinishContextValues = ReactState<boolean>

const defaultValue: FinishContextValues = [false, () => {}]

const FinishContext = createContext<FinishContextValues>(defaultValue)

export default FinishContext

export const FinishProvider: React.FC = (props) => {
  const { children } = props
  const isFinishedState = useState<boolean>(false)

  return <FinishContext.Provider value={isFinishedState}>{children}</FinishContext.Provider>
}
