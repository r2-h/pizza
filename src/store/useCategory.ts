import { create } from "zustand"

type Store = {
  activeId: number
  setActiveId: (newCategory: number) => void
}

export const useCategory = create<Store>()((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}))
