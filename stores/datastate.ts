import create from "zustand";
import { DataBlockType } from "../stateType/stores";

export const dataStore = create<DataBlockType>((set) => ({
    mobilemenucontrol: false,
    setMobilemenucontrol: (mobilemenucontrol) => set((state) => ({ ...state, mobilemenucontrol })),
    removeMobilemenucontrol: () => set((state) => ({ ...state, mobilemenucontrol: false })),
}));
