import React from 'react'

const QuestionAnswer = ({ question_answer }) => {

  return (
    <li className='question-answer-instance'>
      <h4>{question_answer.question}</h4>
      <p>{question_answer.name}</p><br />
      <p>{question_answer.answer}</p>
    </li>
  )
}

export default QuestionAnswer
