import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createmobilemenucontrolSlice, StoreInterface } from './mobilemenucontrolSlice'
import { createmobilemenucontrolSlice2, StoreInterface2 } from './mobilemenucontrolSlice2'
import { createcompound, StoreInterface3 } from './compound'

type StoreState = StoreInterface
type StoreState2 = StoreInterface2
type StoreState3 = StoreInterface3

export const useBoundStore = create<StoreState>()(persist((...a) => ({
    ...createmobilemenucontrolSlice(...a),
}), { name: 'app-store',}))
export const useBoundStore2 = create<StoreState2>()((...a) => ({
    ...createmobilemenucontrolSlice2(...a),
}))
export const useBoundStore3 = create<StoreState3>()(persist((...a) => ({
    ...createcompound(...a),
}),{ name: 'store', 
     storage: createJSONStorage(() => sessionStorage), }))