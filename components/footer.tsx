'use client'
import React from 'react'
import { useAnswers } from '@/store/answers' // Import Zustand store

const Footer = () => {
  const { answers } = useAnswers() // Access answers from Zustand

  const totalQuestions = 13
  const answeredCount = Object.values(answers).filter(
    (value) => value !== null && value !== ''
  ).length
  const allAnswered = answeredCount === totalQuestions // Check if all are answered

  return (
    <div className="fixed bottom-0 w-full flex bg-white">
      <div className="w-1/3 flex pt-4 gap-1">
        <span
          className={`cursor-pointer font-bold py-4 px-8 before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative ${
            allAnswered ? 'before:bg-green' : 'before:bg-grey-bright'
          }`}
        >
          Passage 1
        </span>
        <span className="flex items-center gap-1">
          {Array(totalQuestions)
            .fill(null)
            .map((_, index) => {
              const questionKey = `answer${index + 1}` // Match Zustand answer keys
              const isAnswered =
                answers[questionKey] !== null && answers[questionKey] !== ''

              return (
                <div
                  key={index}
                  className={`before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative py-4 cursor-pointer ${
                    isAnswered ? 'before:bg-green' : 'before:bg-grey-bright'
                  }`}
                >
                  <div className="px-1 border-[1px] border-white rounded-sm ">
                    {index + 1}
                  </div>
                </div>
              )
            })}
        </span>
      </div>
      <div className="w-1/3"></div>
      <div className="w-1/3"></div>
    </div>
  )
}

export default Footer
