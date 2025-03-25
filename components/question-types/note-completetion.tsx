'use client'
import React from 'react'
import { data } from '@/lib/data'
import { useAnswers } from '@/store/answers'
import { useActiveQuestion } from '@/store/active-question'

const NoteCompletion = () => {
  const { answers, changeAnswer } = useAnswers() // Use Zustand store
  const { activeQuestion, setActiveQuestion } = useActiveQuestion()

  return (
    <div className="my-4">
      <h1 className="font-bold mb-2">Questions 7-13</h1>
      <p>
        Complete the notes. Write{' '}
        <b>{data.passage1.noteCompletion?.requirements}</b> from the text for
        each answer.
      </p>
      <h2 className="font-bold mt-4 text-xl">
        {data.passage1.noteCompletion?.title}
      </h2>
      <ul className="list-disc my-4 mx-10 flex flex-col gap-3">
        {data.passage1.noteCompletion?.questions.map((item, i) => {
          const questionKey = `answer${7 + i}` // Ensuring unique keys for Zustand store

          return (
            <li key={i} className="">
              {item.text1}{' '}
              <input
                type="text"
                className="max-w-36 px-1 focus:border-blue rounded-[3px] focus:border-[2px] border-[1px] focus:outline-0 h-6 border-[#949494]"
                placeholder={`${
                  (data.passage1.noteCompletion?.quantity ?? 0) + i
                }`}
                value={answers[questionKey] || ''} // Fetch stored answer from Zustand
                onChange={(e) => {
                  if (changeAnswer) {
                    changeAnswer(questionKey, e.target.value)
                  }
                }} // Update Zustand store
                onClick={() => {
                  setActiveQuestion(i + 7)
                }}
              />{' '}
              {item.text2}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NoteCompletion
