import { type PropsWithChildren, useRef } from 'react'
import type { StoreType } from './datastate'
import { initializeStore, Provider } from './datastate'

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  const storeRef = useRef<StoreType>()

  if (!storeRef.current) {
    storeRef.current = initializeStore(props)
  }

  return <Provider value={storeRef.current}>{children}</Provider>
}

export default StoreProvider
