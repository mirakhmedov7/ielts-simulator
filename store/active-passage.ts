import { create } from 'zustand'

interface ActivePassage {
  activePassage: number
  setActivePassage: (number: number) => void
}

export const useActivePassage = create<ActivePassage>()((set) => ({
  activePassage: 1,
  setActivePassage: (number) => set(() => ({ activePassage: number })),
}))
