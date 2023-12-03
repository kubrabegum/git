import React from 'react';
import { reactMCQs } from "./questions.js";

export const QuizSummary = () => {
  // Assuming reactMCQs is the original array of questions
  const questions = reactMCQs;

  return (
    <>
      <h1>Quiz Summary</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question.question}</h2>
          <p>Correct Answer: {question.options[question.correctAnswer]}</p>
          <p>User's Answer: {question.userAnswer || 'Not answered'}</p>
        </div>
      ))}
    </>
  );
};
    