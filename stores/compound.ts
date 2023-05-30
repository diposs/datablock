import { StateCreator } from 'zustand'

export interface StoreInterface3 {
  inUser: boolean
  updateinUser: (inUser: boolean) => void
  pKey: string | null | undefined
  updatepKey: (inUser: string) => void
}

export const createcompound: StateCreator<StoreInterface2> = (set, get) => ({
    inUser: false,
    updateinUser: (inUser) => {set({inUser: inUser},)},
    pKey: null,
    updatepKey: (pKey) => {set({pKey: pKey},)},
  })

