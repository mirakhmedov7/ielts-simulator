'use client'
import React, { act } from 'react'
import { useAnswers } from '@/store/answers' // Import Zustand store
import { FaCheck } from 'react-icons/fa'
import { useActiveQuestion } from '@/store/active-question'
import { useActivePassage } from '@/store/active-passage'

const Footer = () => {
  const { answers } = useAnswers() // Access answers from Zustand

  const totalQuestions = 13
  const answeredCount = Object.values(answers).filter(
    (value) => value !== null && value !== ''
  ).length
  const allAnswered = answeredCount === totalQuestions // Check if all are answered

  const { activeQuestion, setActiveQuestion } = useActiveQuestion()
  const { activePassage, setActivePassage } = useActivePassage()
  return (
    <div className="fixed bottom-0 w-full flex bg-white pt-4 gap-1">
      <div className="flex w-full">
        <div
          className={`w-1/3 flex gap-1 text-base ${
            activePassage == 1
              ? ''
              : activePassage == 2 || 3
              ? 'w-1/3 hover:bg-grey-hover duration-initial flex items-center justify-center gap-4 cursor-pointer'
              : ''
          }`}
          onClick={() => setActivePassage(1)}
        >
          {activePassage == 1 ? (
            <>
              {' '}
              <span
                className={`cursor-pointer font-bold py-4 px-4 before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative flex items-center gap-1 ${
                  allAnswered ? 'before:bg-green' : 'before:bg-grey-bright'
                }`}
              >
                {allAnswered ? <FaCheck className="text-green" /> : ''}
                Passage 1
              </span>
              <span className="flex items-center gap-1">
                {Array(totalQuestions)
                  .fill(null)
                  .map((_, index) => {
                    const questionKey = `answer${index + 1}` // Match Zustand answer keys
                    const isAnswered =
                      answers[questionKey] !== null &&
                      answers[questionKey] !== ''

                    return (
                      <div
                        key={index}
                        className={`before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative py-4 cursor-pointer ${
                          isAnswered
                            ? 'before:bg-green'
                            : 'before:bg-grey-bright'
                        }`}
                      >
                        <div
                          className={`px-1 border-[2px] hover:font-bold ease-in hover:border-blue rounded-sm ${
                            index + 1 == activeQuestion
                              ? 'border-blue'
                              : 'border-white'
                          }`}
                        >
                          {index + 1}
                        </div>
                      </div>
                    )
                  })}
              </span>
            </>
          ) : (
            <>
              <span>Passage 2</span>
              <span className="text-grey-dark">0 of 13</span>
            </>
          )}
        </div>
        <div
          className={`text-base ${
            activePassage == 1
              ? 'flex items-center justify-center gap-4 cursor-pointer w-1/3 hover:bg-grey-hover'
              : activePassage == 3
              ? 'flex items-center justify-center gap-4 cursor-pointer w-1/3 hover:bg-grey-hover'
              : 'w-[43%] flex gap-1'
          }`}
          onClick={() => setActivePassage(2)}
        >
          {activePassage == 2 ? (
            <>
              {' '}
              <span
                className={`cursor-pointer font-bold py-4 before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative flex items-center gap-1 ${
                  allAnswered
                    ? 'before:bg-green px-5'
                    : 'before:bg-grey-bright px-5'
                }`}
              >
                {allAnswered ? <FaCheck className="text-green" /> : ''}
                Passage 2
              </span>
              <span className="flex items-center gap-1">
                {Array(totalQuestions)
                  .fill(null)
                  .map((_, index) => {
                    const questionKey = `answer${index + 1}` // Match Zustand answer keys
                    const isAnswered =
                      answers[questionKey] !== null &&
                      answers[questionKey] !== ''

                    return (
                      <div
                        key={index}
                        className={`before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative py-4 cursor-pointer ${
                          isAnswered
                            ? 'before:bg-green'
                            : 'before:bg-grey-bright'
                        }`}
                      >
                        <div
                          className={`px-1 border-[2px] hover:font-bold ease-in hover:border-blue rounded-sm ${
                            index + 1 == activeQuestion
                              ? 'border-blue'
                              : 'border-white'
                          }`}
                        >
                          {index + 14}
                        </div>
                      </div>
                    )
                  })}
              </span>
            </>
          ) : (
            <>
              <span>Passage 2</span>
              <span className="text-grey-dark">0 of 13</span>
            </>
          )}
        </div>
        <div
          className={`text-base ${
            activePassage == 1
              ? 'flex items-center justify-center gap-4 cursor-pointer w-1/3 hover:bg-grey-hover'
              : activePassage == 2
              ? 'flex items-center justify-center gap-4 cursor-pointer w-1/3 hover:bg-grey-hover'
              : 'w-[47%] flex gap-1'
          }`}
          onClick={() => setActivePassage(3)}
        >
          {activePassage == 3 ? (
            <>
              {' '}
              <span
                className={`cursor-pointer font-bold py-4 before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative flex items-center gap-1 ${
                  allAnswered
                    ? 'before:bg-green px-5'
                    : 'before:bg-grey-bright px-5'
                }`}
              >
                {allAnswered ? <FaCheck className="text-green" /> : ''}
                Passage 3
              </span>
              <span className="flex items-center gap-1">
                {Array(14)
                  .fill(null)
                  .map((_, index) => {
                    const questionKey = `answer${index + 1}` // Match Zustand answer keys
                    const isAnswered =
                      answers[questionKey] !== null &&
                      answers[questionKey] !== ''

                    return (
                      <div
                        key={index}
                        className={`before:block before:w-full before:h-[3px] before:absolute before:top-0 before:left-0 relative py-4 cursor-pointer ${
                          isAnswered
                            ? 'before:bg-green'
                            : 'before:bg-grey-bright'
                        }`}
                      >
                        <div
                          className={`px-1 border-[2px] hover:font-bold ease-in hover:border-blue rounded-sm ${
                            index + 1 == activeQuestion
                              ? 'border-blue'
                              : 'border-white'
                          }`}
                        >
                          {index + 27}
                        </div>
                      </div>
                    )
                  })}
              </span>
            </>
          ) : (
            <>
              <span>Passage 3</span>
              <span className="text-grey-dark">0 of 14</span>
            </>
          )}
        </div>
      </div>
      <span className="flex items-center justify-center w-20 bg-grey-hover cursor-pointer text-grey hover:bg-black hover:text-white">
        <FaCheck />
      </span>
    </div>
  )
}

export default Footer
