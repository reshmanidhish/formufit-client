import React, {useState} from "react";
import "./questionare-page.scss"
import {Card, CardBody} from "reactstrap";
import bmiUnderweightImage from "../../assets/img/BMI-Underweight.png";
import bmiNormalImage from "../../assets/img/BMI-Normal.png";
import bmiOverweightImage from "../../assets/img/BMI-Overweight.png";
import bmiObeseImage from "../../assets/img/BMI-Obese.png";

function Questionare() {
    const [showQuestionare, setShowQuestionare] = useState(true);
    const[bmi,setBmi]=useState(0)
    const[height,setHeight]=useState(0)
    const [weight,setWeight]=useState(0)
    const handleQuestionareComplete = () => {
        setShowQuestionare(false); // Set showQuestionare to false to transition to the next component/page
   const bmi=(height, weight) => {
       const heightInMeters = height / 100; // Convert height to meters
       const bmi = weight / (heightInMeters * heightInMeters);
      // setBMI(bmi.toFixed(2)); // Set BMI with 2 decimal places
   };

    };

    const lifeStyleScore ={
        s: 12,
        ect:10

    }
    const questions = [
        {
            questionText: "What is your height?",
            answerInput: "height", // Use a unique identifier for the input
        },
        {
            questionText: "What is your weight?",
            answerInput: "weight", // Use a unique identifier for the input
        },

        {
            questionText:
                "How often do you engage in physical activities or exercise during the week?",
            answerOptions: [
                {answerText: " Rarely or never (0 points)", score: 0},
                {answerText: "1-2 days a week (1 point)", score: 1},
                {answerText: "3-4 days a week (2 points)", score: 2},
                {answerText: "5 or more days a week (3 points)", score: 3},
            ],
        },
        {
            questionText:
                "How much time do you spend sitting or being inactive during a typical workday?",
            answerOptions: [
                {answerText: " Most of the time (0 points)", score: 0},
                {answerText: "About half the time (1 point)", score: 1},
                {answerText: "Occasional breaks from sitting (2 points)", score: 2},
                {
                    answerText:
                        "Very little sitting, often standing or moving (3 points)",
                    score: 3,
                },
            ],
        },
        {
            questionText: "How do you commute to work or travel short distances?",
            answerOptions: [
                {
                    answerText: " Drive or use public transportation (0 points)",
                    score: 0,
                },
                {answerText: "Walk or cycle occasionally (1 point)", score: 1},
                {answerText: "Walk or cycle most of the time (2 points", score: 2},
                {
                    answerText:
                        "Always walk or cycle, no motorized transportation (3 points)",
                    score: 3,
                },
            ],
        },
        {
            questionText:
                "How active are you during leisure time (e.g., playing sports, going for walks)?",
            answerOptions: [
                {answerText: "Rarely or never (0 points)", score: 0},
                {answerText: "Sometimes, but not regularly (1 point)", score: 1},
                {answerText: "Fairly regularly (2 points)", score: 2},
                {
                    answerText: "Very regularly and enjoy staying active (3 points",
                    score: 3,
                },
            ],
        },
        {
            questionText:
                "How often do you engage in activities that involve moderate to vigorous physical effort?",
            answerOptions: [
                {answerText: "Rarely or never (0 points)", score: 0},
                {answerText: "Sometimes, but not regularly (1 point)", score: 1},
                {answerText: "Fairly regularly (2 points)", score: 2},
                {
                    answerText: "Very regularly and enjoy staying active (3 points",
                    score: 3,
                },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const [userAnswers, setUserAnswers] = useState({});
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerInput = (identifier, value) => {
        // setUserAnswers({ ...userAnswers, [identifier]: value });
    };

    const handleAnswerOptionClick = (score) => {
        setTotalScore(totalScore + score);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
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


    return (
        <div className="questionare">
            <div className="d-flex justify-content-center align-items-center container-body" style={{height: '100vh'}}>
                <div className="section">
                    <div className="section-body d-flex">
                        {/*<div className='main d-flex'>*/}
                        <div className="section-left">

                        </div>
                        <div className="section-right">
                            <Card>
                                <CardBody>
                                    {showScore ? (
                                        <div className="score-section">
                                            {/*You scored {totalScore}*/}
                                            <center>
                                                <div className="bmiChartImage">
                                                    <img id="BMI-Underweight" className="bmiChartImageElement"
                                                         src={bmiUnderweightImage} alt="BMI Body Mass Index Chart"/>
                                                    <img id="BMI-Normal" className="active bmiChartImageElement"
                                                         src={bmiNormalImage} alt="BMI Body Mass Index Chart"/>
                                                    <img id="BMI-Overweight" className="bmiChartImageElement"
                                                         src={bmiOverweightImage}
                                                         alt="BMI Body Mass Index Chart"/>
                                                    <img id="BMI-Obese" className="bmiChartImageElement"
                                                         src={bmiObeseImage}
                                                         alt="BMI Body Mass Index Chart"/>
                                                </div>
                                            </center>
                                            {/*{questions.reduce((total, q) => total + q.score, 0)}*/}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="question-section">
                                                <div className="question-count">
                                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                                </div>

                                                <div className="question-text">
                                                    {questions[currentQuestion].questionText}
                                                </div>
                                                {questions[currentQuestion].answerInput
                                                    ? (
                                                    <input
                                                        type="text"
                                                        // value={
                                                        //   userAnswers[questions[currentQuestion].answerInput] || ""
                                                        // }
                                                        onChange={(e) =>
                                                            handleAnswerInput(
                                                                questions[currentQuestion].answerInput,
                                                                e.target.value
                                                            )
                                                        }
                                                    />)
                                                    : (
                                                    <div className="answer-section">
                                                        {questions[currentQuestion].answerOptions.map(
                                                            (answerOption) => (
                                                                <button className="questionare-button"
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

                                            <div className="answer-section">
                                                <button className="questionare-button" onClick={handlePrevQuestion}>Prev
                                                </button>
                                                <button className="questionare-button" onClick={handleNextQuestion}>Next
                                                </button>
                                            </div>
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
