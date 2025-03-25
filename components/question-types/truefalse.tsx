'use client'
import React from 'react'
import { data } from '@/lib/data' // Ensure correct path to the data file
import { useAnswers } from '@/store/answers'

const TrueFalseQuiz = () => {
  const { answers, changeAnswer } = useAnswers() // Use Zustand store
  console.log(answers)

  if (!changeAnswer) {
    throw new Error('changeAnswer is undefined');
  }

  const options = [
    { id: 'true', value: 'true', label: 'TRUE' },
    { id: 'false', value: 'false', label: 'FALSE' },
    { id: 'not-given', value: 'not-given', label: 'NOT GIVEN' },
  ]

  const questions = data.passage1.trueFalseNotGiven?.questions || []

  const handleSelect = (questionId: number, value: string) => {
    changeAnswer(`answer${questionId}`, value) // Update Zustand store
  }

  return (
    <div className="pr-4">
      <h1 className="font-bold mb-2">
        Questions{' '}
        {data.passage1.trueFalseNotGiven?.order == 1
          ? `1–${data.passage1.trueFalseNotGiven?.quantity}`
          : ''}
      </h1>
      <p className="text-base">
        Choose <b>TRUE</b> if the statement agrees with the information given in
        the text, choose <b>FALSE</b> if the statement contradicts the
        information, or choose <b>NOT GIVEN</b> if there is no information on
        this.
      </p>

      {questions.map((question) => (
        <section key={question.questionNumber} className="pt-4">
          <p>
            <span className="py-1 px-2 border-[2px] rounded-sm border-white mr-1">
              {question.questionNumber}
            </span>
            <span>{question.question}</span>
          </p>
          <ul className="w-full pt-4 flex flex-col gap-[1px]">
            {options.map((option) => (
              <li
                key={option.id + question.questionNumber}
                className={`rounded-sm py-2 px-3 flex gap-2 cursor-pointer hover:bg-grey-hover duration-200 ease-in ${
                  answers[`answer${question.questionNumber}`] === option.value
                    ? 'bg-blue-bright'
                    : ''
                }`}
                onClick={() =>
                  handleSelect(question.questionNumber, option.value)
                }
              >
                <input
                  type="radio"
                  id={`${option.id}-${question.questionNumber}`}
                  name={`question-${question.questionNumber}`}
                  value={option.value}
                  checked={
                    answers[`answer${question.questionNumber}`] === option.value
                  }
                  onChange={() =>
                    handleSelect(question.questionNumber, option.value)
                  }
                />
                <label htmlFor={`${option.id}-${question.questionNumber}`}>
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default TrueFalseQuiz
