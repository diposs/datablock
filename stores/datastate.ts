import create from "zustand";
import { DataBlockType } from "../types/stores";

const dataStore = create<DataBlockType>((set) => ({
    mobilemenucontrol: false,
    setMobilemenucontrol: (mobilemenucontrol) => set((state) => ({ ...state, mobilemenucontrol })),
    removeMobilemenucontrol: () => set((state) => ({ ...state, mobilemenucontrol: false })),
}));

export { nearStore };
