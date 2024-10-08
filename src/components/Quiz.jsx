// src/components/Quiz.jsx

import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: "Hypertext Markup Language",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Laravel", "React", "Django"],
      answer: "React",
    },
    {
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript"],
      answer: "CSS",
    },
  ];

  const [currentAnswers, setCurrentAnswers] = useState({});
  const [error, setError] = useState("");

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setCurrentAnswers({
      ...currentAnswers,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let allCorrect = true;

    questions.forEach((q, index) => {
      if (currentAnswers[index] !== q.answer) {
        allCorrect = false;
      }
    });

    if (allCorrect) {
      window.location.href = "/registration"; // Redirect to registration
    } else {
      setError("Some answers are incorrect. Please try again.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h2>Quiz</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <div key={i} style={{ textAlign: 'left' }}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswerChange(index, option)}
                      required
                      style={{ marginRight: '10px' }}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ padding: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>Submit Quiz</button>
        </form>
      </div>
    </div>
  );
};

export default Quiz;
