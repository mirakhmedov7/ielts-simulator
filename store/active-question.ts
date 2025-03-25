import { create } from 'zustand'

interface ActiveQuestion {
  activeQuestion: number
  setActiveQuestion: (number: number) => void
}

export const useActiveQuestion = create<ActiveQuestion>()((set) => ({
  activeQuestion: 1,
  setActiveQuestion: (number) => set(() => ({ activeQuestion: number })),
}))
