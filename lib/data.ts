type Data = {
  passage1: {
    trueFalseNotGiven?: {
      quantity: number
      order: number
      questions: {
        questionNumber: number
        question: string
      }[]
    }
    noteCompletion?: {
      quantity: number
      requirements: string
      title: string
      questions: {
        text1: string
        text2: string
      }[]
    }
  }
}

export const data: Data = {
  passage1: {
    trueFalseNotGiven: {
      quantity: 6,
      order: 1,
      questions: [
        {
          questionNumber: 1,
          question:
            'Marie Curie’s husband was a joint winner of both Marie’s Nobel Prizes.',
        },
        {
          questionNumber: 2,
          question: 'Marie became interested in science when she was a child.',
        },
        {
          questionNumber: 3,
          question:
            'Marie was able to attend the Sorbonne because of her sister’s financial contribution.',
        },
        {
          questionNumber: 4,
          question:
            'Marie stopped doing research for several years when her children were born',
        },
        {
          questionNumber: 5,
          question:
            'Marie took over the teaching position her husband had held.',
        },
        {
          questionNumber: 6,
          question:
            'Marie’s sister Bronia studied the medical uses of radioactivity.',
        },
      ],
    },
    noteCompletion: {
      quantity: 7,
      requirements: 'ONE WORD ONLY',
      title: "Marie Curie's research on radioactivity",
      questions: [
        {
          text1:
            'When uranium was discovered to be radioactive, Marie Curie found that the element called',
          text2: 'had the same property.',
        },
        {
          text1:
            'Marie and Pierre Curie’s research into the radioactivity of the mineral known as',
          text2: 'led to the discovery of two new elements',
        },
        {
          text1:
            'In 1911, Marie Curie received recognition for her work on the element',
          text2: '.',
        },
        {
          text1:
            ' Marie and Irène Curie developed X-radiography which was used as a medical technique for ',
          text2: '.',
        },
        {
          text1:
            'Marie Curie saw the importance of collecting radioactive material both for research and for cases of',
          text2: '.',
        },
        {
          text1:
            'The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the',
          text2: 'and of what was known as artificial radioactivity',
        },
        {
          text1:
            'During her research, Marie Curie was exposed to radiation and as a result she suffered from ',
          text2: '.',
        },
      ],
    },
  },
}
