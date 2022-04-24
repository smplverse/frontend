import { createContext, Dispatch, SetStateAction } from 'react'

interface IWaitingContext {
  isWaiting: boolean
  setIsWaiting: Dispatch<SetStateAction<boolean>>
}

export const WaitingContext = createContext<IWaitingContext>({
  isWaiting: false,
  setIsWaiting: () => null,
})
