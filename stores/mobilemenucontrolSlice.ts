import { StateCreator } from 'zustand'

export interface StoreInterface {
  mobilemenucontrol: boolean
  update: (mobilemenucontrol: boolean) => void
}

export const createmobilemenucontrolSlice: StateCreator<StoreInterface> = (set, get) => ({
    mobilemenucontrol: false,
    update: (mobilemenucontrol) => {set({mobilemenucontrol: mobilemenucontrol},)},
  })

