import './App.css';
import React, { useState } from 'react';
import Question from './components/Question';
import { QuizSummary } from './components/QuizSummary';
import {reactMCQs} from "./components/questions"

const App = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState(reactMCQs);

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  return (
    <div>
      {!quizCompleted ? (
        <Question
          questions={questions}
          onQuizComplete={handleQuizComplete}
        />
      ) : (
        <QuizSummary  />
      )}
    </div>
  );
};

export default App;