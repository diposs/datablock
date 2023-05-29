import { createContext, useContext } from 'react'
import { createStore, useStore as useZustandStore } from 'zustand'

interface StoreInterface {
  mobilemenucontrol: boolean
  update: (mobilemenucontrol: boolean) => void

}

const getDefaultInitialState = () => ({
  mobilemenucontrol: false,
})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext)

  if (!store) throw new Error('Store is missing the provider')

  return useZustandStore(store, selector)
}

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {}
) => {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    update: (mobilemenucontrol) => {
      set({
        mobilemenucontrol: !!mobilemenucontrol,
      })
    },
  }))
}
