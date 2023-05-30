import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createmobilemenucontrolSlice, StoreInterface } from './mobilemenucontrolSlice'
import { createmobilemenucontrolSlice2, StoreInterface2 } from './mobilemenucontrolSlice2'

type StoreState = StoreInterface 

export const useBoundStore = create<StoreState>()(persist((...a) => ({
    ...createmobilemenucontrolSlice(...a),
}), { name: 'app-store',}))
export const useBoundStore2 = create<StoreState2>()((...a) => ({
    ...createmobilemenucontrolSlice2(...a),
}))