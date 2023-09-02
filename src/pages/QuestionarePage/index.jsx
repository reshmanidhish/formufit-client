import React, { useContext, useState } from "react";
import "./questionare-page.scss";
import { Button, Card, CardBody, Input } from "reactstrap";
import bmiUnderweightImage from "../../assets/img/BMI-Underweight.png";
import bmiNormalImage from "../../assets/img/BMI-Normal.png";
import bmiOverweightImage from "../../assets/img/BMI-Overweight.png";
import bmiObeseImage from "../../assets/img/BMI-Obese.png";
import formufitService from "../../services/formufit.service";
import { useNavigate } from "react-router-dom";
import authService from "services/auth.service";
import { AuthContext } from "context/auth.context";


function Questionare() {
  const [userWeightAndHeight, setUserWeightAndHeight] = useState({height: "", weight: ""});
  const [showQuestionare, setShowQuestionare] = useState(true);
  const [bmi, setBmi] = useState(0);
  const [userBodyType, setUserBodyType] = useState("");
  const [userLifestyle, setUserLifestyle] = useState("");
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);
  
  
  const handleAnswerSubmit=()=>{

    authService.refresh()
    .then(response => {
        storeToken(response.data.authToken)
        authenticateUser()// update my state variables
        navigate("/profile")
        })
    };
      

  const handleQuestionareComplete = () => {
    setShowQuestionare(false); // Set showQuestionare to false to transition to the next component/page
    const { height, weight } = userWeightAndHeight;
    // Calculate BMI
    const heightInMeters = height / 100; // Convert height to meters
    const calculatedBmi = weight / (heightInMeters * heightInMeters);

    setBmi(calculatedBmi.toFixed(2));
    // Replace this with your actual calculated BMI

    let bodyType = "";

    if (calculatedBmi < 18.5) {
      bodyType = "Underweight";
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25.0) {
      bodyType = "Normal";
    } else if (calculatedBmi >= 25.0 && calculatedBmi < 30.0) {
      bodyType = "Overweight";
    } else {
      bodyType = "Obese";
    }
    setUserBodyType(bodyType);

    let lifestyle = "";

    if (totalScore <= 5) {
      lifestyle = "Sedentary"; // Very low activity level
    } else if (totalScore <= 10) {
      lifestyle = "Basic"; // Low to moderate activity level
    } else if (totalScore <= 15) {
      lifestyle = "Active"; // Moderate to high activity level
    } else {
      lifestyle = "Very Active"; // High activity level
    }
    setUserLifestyle(lifestyle);
    setShowScore(true);

    const dataToUpdate = {
      lifestyle,
      bodyType,
      bmi:calculatedBmi, 
      weight: userWeightAndHeight.weight, 
      height: userWeightAndHeight.height
    }
    formufitService
      .updateWellnessProfile(dataToUpdate)
      .then((updatedProfile) => {
       
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) ❌
      });
  };

  const questions = [
    {
      questionText:
        "How often do you engage in physical activities or exercise during the week?",
      answerOptions: [
        { answerText: " Rarely or never", score: 0 },
        { answerText: "1-2 days a week", score: 1 },
        { answerText: "3-4 days a week", score: 2 },
        { answerText: "5 or more days a week", score: 3 },
      ],
    },
    {
      questionText:
        "How much time do you spend sitting or being inactive during a typical workday?",
      answerOptions: [
        { answerText: " Most of the time", score: 0 },
        { answerText: "About half the time", score: 1 },
        { answerText: "Occasional breaks from sitting", score: 2 },
        {
          answerText:
            "Very little sitting, often standing or moving",
          score: 3,
        },
      ],
    },
    {
      questionText: "How do you commute to work or travel short distances?",
      answerOptions: [
        {
          answerText: " Drive or use public transportation",
          score: 0,
        },
        { answerText: "Walk or cycle occasionally", score: 1 },
        { answerText: "Walk or cycle most of the time", score: 2 },
        {
          answerText:
            "Always walk or cycle, no motorized transportation",
          score: 3,
        },
      ],
    },
    {
      questionText:
        "How active are you during leisure time (e.g., playing sports, going for walks)?",
      answerOptions: [
        { answerText: "Rarely or never", score: 0 },
        { answerText: "Sometimes, but not regularly", score: 1 },
        { answerText: "Fairly regularly", score: 2 },
        {
          answerText: "Very regularly and enjoy staying active",
          score: 3,
        },
      ],
    },
    {
      questionText:
        "How often do you engage in activities that involve moderate to vigorous physical effort?",
      answerOptions: [
        { answerText: "Rarely or never", score: 0 },
        { answerText: "Sometimes, but not regularly", score: 1 },
        { answerText: "Fairly regularly", score: 2 },
        {
          answerText: "Very regularly and enjoy staying active",
          score: 3,
        },
      ],
    },
    {
      questionText: "What is your height?",
      answerInput: "height", // Use a unique identifier for the input
    },
    {
      questionText: "What is your weight?",
      answerInput: "weight", // Use a unique identifier for the input
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerInput = (identifier, value) => {
    setUserWeightAndHeight((prevState) => ({
      ...prevState,
      [identifier]: parseInt(value),
    }));
    console.log(userWeightAndHeight)
    // setUserAnswers({ ...userAnswers, [identifier]: value });
  };

  const handleAnswerOptionClick = (score) => {
    setTotalScore(totalScore + score);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      console.log(userWeightAndHeight);
      handleQuestionareComplete();
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuestionareComplete(); // Transition to the next component/page
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0 && currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const inputStyle = {
    color: "black",
    fontSize: "18px",
  };

  return (
    <div className="questionare">
      <div
        className="d-flex justify-content-center align-items-center container-body"
        style={{ height: "100vh" }}
      >
        <div className="section">
          <div className="section-body d-flex">
            {/*<div className='main d-flex'>*/}
            <div className="section-left"></div>
            <div className="section-right">
              <Card>
                <CardBody>
                  {showScore ? (
                    <div className="score-section">
                      {/*You scored {totalScore}*/}
                      <center>
                        <div className="bmiChartImage">
                          <img
                            id="BMI-Underweight"
                            className={`${
                              userBodyType === "Underweight" ? "active" : ""
                            } bmiChartImageElement`}
                            src={bmiUnderweightImage}
                            alt="BMI Body Mass Index Chart"
                          />

                          <img
                            id="BMI-Normal"
                            className={`${
                              userBodyType === "Normal" ? "active" : ""
                            }  bmiChartImageElement`}
                            src={bmiNormalImage}
                            alt="BMI Body Mass Index Chart"
                          />

                          <img
                            id="BMI-Overweight"
                            className={`${
                              userBodyType === "Overweight" ? "active" : ""
                            }
                                                    bmiChartImageElement`}
                            src={bmiOverweightImage}
                            alt="BMI Body Mass Index Chart"
                          />

                          <img
                            id="BMI-Obese"
                            className={`${
                              userBodyType === "Obese" ? "active" : ""
                            }
                                                    bmiChartImageElement`}
                            src={bmiObeseImage}
                            alt="BMI Body Mass Index Chart"
                          />
                        </div>
                        <li>
                          <b>Your calculated BMI: {bmi}</b>
                        </li>
                        <li>
                          <b>Your Lifestyle: {userLifestyle}</b>
                        </li>
                        <Button onClick={() => handleAnswerSubmit()} color="success"> continue</Button>
                      </center>
                      {/*{questions.reduce((total, q) => total + q.score, 0)}*/}
                    </div>
                  ) : (
                    <>
                      <div className="question-section">
                        <div className="question-count">
                          <span>Question {currentQuestion + 1}</span>/
                          {questions.length}
                        </div>

                        <div className="question-text">
                          {questions[currentQuestion].questionText}
                        </div>

                        {questions[currentQuestion].answerInput ? (
                          // <input
                          //   type="text"
                          // input for height and weight

                          // value={
                          //   userAnswers[questions[currentQuestion].answerInput] || ""
                          // }

                          // />

                          <Input
                            type="number"
                            name="numberField"
                            id="numberField"
                            style={inputStyle}
                            placeholder={`Enter your ${questions[currentQuestion].answerInput}`}
                            value={userWeightAndHeight[questions[currentQuestion].answerInput]}
                            onChange={(e) =>
                              handleAnswerInput(
                                questions[currentQuestion].answerInput,
                                e.target.value
                              )
                            }
                            step="1"
                          />
                        ) : (
                          <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map(
                              (answerOption) => (
                                <button
                                  className="questionare-button"
                                  key={answerOption.answerText}
                                  onClick={() =>
                                    handleAnswerOptionClick(answerOption.score)
                                  }
                                >
                                  {answerOption.answerText}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                      {questions[currentQuestion].answerInput && (
                        <div className="answer-section">
                          <button
                            className="questionare-button"
                            onClick={handlePrevQuestion}
                          >
                            Prev
                          </button>
                          <button
                            className="questionare-button"
                            onClick={handleNextQuestion}
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionare;
