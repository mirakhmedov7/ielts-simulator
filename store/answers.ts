import { create } from 'zustand'

interface Answers {
  answers: {
    [key: string]: string | null
  }
  changeAnswer?: (key: keyof Answers['answers'], value: string | null) => void
}

export const useAnswers = create<Answers>()((set) => ({
  answers: {
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    answer6: null,
    answer7: null,
    answer8: null,
    answer9: null,
    answer10: null,
    answer11: null,
    answer12: null,
    answer13: null,
  },
  changeAnswer: (key, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [key]: value,
      },
    })),
}))
