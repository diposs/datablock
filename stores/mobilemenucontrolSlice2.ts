import { StateCreator } from 'zustand'

export interface StoreInterface2 {
  mobilemenucontrol2: boolean
  update: (mobilemenucontrol2: boolean) => void
}

export const createmobilemenucontrolSlice2: StateCreator<StoreInterface2> = (set, get) => ({
    mobilemenucontrol2: false,
    update: (mobilemenucontrol2) => {set({mobilemenucontrol2: mobilemenucontrol2},)},
  })

