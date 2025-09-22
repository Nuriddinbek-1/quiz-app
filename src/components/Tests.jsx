import { useState } from "react";
import Result from "./Result";
import toast from "react-hot-toast";

function Tests({ quizzes }) {
  const { title, color, icon, questions } = quizzes.data[0];
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = questions[questionIndex].answer;
    if (selectedAnswer == null) {
      toast.error("Please select an answer");
    } else if (selectedAnswer == correctAnswer) {
      setAnswerStatus("correct");
      setCorrectAnswerCount(correctAnswerCount + 1);
    } else {
      setAnswerStatus("incorrect");
    }

    setStatusDisabled(true);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
    setSelectedAnswer(null);
    setAnswerStatus(null);
    setShowNextButton(false);
    setStatusDisabled(false);
  };

  if (questionIndex == questions.length) {
    toast.success("Congratulations", { icon: "🎉" });
    return (
      <Result
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        questions={questions}
      />
    );
  }

  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          Answered {answeredQuestions} out of {questions.length}
        </p>
        <h2 className="test-title">{questions[questionIndex].question}</h2>
        <div className="test-process-container">
          <div
            className="test-process"
            style={{
              width: `${(answeredQuestions / questions.length) * 100}%`,
            }}></div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit}>
          <ul className="test-lists">
            {questions[questionIndex].options.map((option, i) => {
              const alphabet = String.fromCharCode(65 + i);
              let className = "";

              if (answerStatus == "correct" && selectedAnswer == option) {
                className = "correct";
              } else if (answerStatus == "incorrect") {
                if (option == questions[questionIndex].answer) {
                  className = "correct";
                }

                if (option == selectedAnswer) {
                  className = "incorrect";
                }
              }

              return (
                <li key={option}>
                  <label className={`test-label ${className}`}>
                    <span className="test-letter">{alphabet}</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => setSelectedAnswer(option)}
                      disabled={statusDisabled}
                    />
                    <span className="test-text">{option}</span>

                    {/* Icons */}
                    <img
                      className="test-icon-correct"
                      src="/assets/icon-correct.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <img
                      className="test-icon-incorrect"
                      src="/assets/icon-incorrect.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          {!showNextButton && (
            <button className="btn test-btn">Submit Question</button>
          )}
          {showNextButton && (
            <button className="btn test-btn" onClick={handleNextQuestion}>
              {answeredQuestions == questions.length
                ? "Finish"
                : "Next Question"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Tests;
