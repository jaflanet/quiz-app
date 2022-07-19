import React, { useEffect, useState } from "react";
import "./quiz.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [dataSoal, setDataSoal] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] =  useState(0);
  const [time, setTime] = useState(120);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // else{
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

    const fetchSoal = async () => {
      const response = await axios.get(apiUrl);
      if (dataSoal.length === 0) {
        setDataSoal(response.data.results);
      }
    };

    if (dataSoal.length === 0) {
      fetchSoal();
    }

    if (questions.length === 0) {
      for (var i in dataSoal) {
        questions.push({
          questionText: dataSoal[i].question,
          answerOptions: [
            { answerText: dataSoal[i].correct_answer, isCorrect: true },
            {
              answerText: dataSoal[i].incorrect_answers[0],
              isCorrect: false,
            },
            {
              answerText: dataSoal[i].incorrect_answers[1],
              isCorrect: false,
            },
            {
              answerText: dataSoal[i].incorrect_answers[2],
              isCorrect: false,
            },
          ],
        });
      }
      // }
    }

    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSoal]);

  useEffect(() => {
    const timer =
      time === 0
        ? setShowScore(true)
        : setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handleAnswerOptionClick = (isCorrect) => {
    var nextQuestion;
    if (isCorrect) {
      setScore(score + 1);
      setCount(count + 1);
      localStorage.setItem("score", score + 1);
    }
    else{
      setCount(count + 1);
    }


    // if (localStorage.getItem("question") !== null){
    //   nextQuestion = localStorage.getItem("question")
    // }
    // else {
     nextQuestion = currentQuestion + 1;
    // }

    if (nextQuestion < 10) {
      setCurrentQuestion(nextQuestion);
      localStorage.setItem("question", currentQuestion + 1);
    } else {
      setShowScore(true);
      localStorage.clear();
    }
  };
  if (questions.length === 0 || dataSoal.length === 0) {
    return null;
  }
  return (
    <div className="app">
      {showScore ? (
        <div className="quiz-container">
          <div className="quiz-question">
            <div>
              <h1 style={{textAlign:"center"}}>
                Congratulation<br/>
                you answered {count} questions<br/>
                You scored {score} out of {questions.length}
              </h1>
              <Link to="/" className="quit-link">
            <button className="quit-button">Quit</button>{" "}
          </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <div>loading....</div>
          ) : (
            <>
              <div className="quiz-container">
                <div className="quiz-question">
                  <div className="question-header">
                    <div>
                      Question {currentQuestion + 1}/{questions.length}
                    </div>
                    <div>Time : {time}s</div>
                  </div>
                  <div>{questions[currentQuestion].questionText}</div>
                  <div className="answer-box">
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <div className="answer-options">
                          <button
                            onClick={() =>
                              handleAnswerOptionClick(answerOption.isCorrect)
                            }
                            className="answer-button"
                          >
                            {answerOption.answerText}
                          </button>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
