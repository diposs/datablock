import { createContext, useContext } from 'react'
import { createStore, useStore as useZustandStore } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

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

createStore<StoreInterface>(persist(
(set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    update: (mobilemenucontrol) => {
      set({
        mobilemenucontrol: !!mobilemenucontrol,
      })
    },
  }),
  {
      name: 'food-storage', // unique name
      getStorage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
    }))
}
