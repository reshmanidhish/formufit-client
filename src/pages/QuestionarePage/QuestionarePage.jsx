import React, {useState} from "react";
import "./QuestionarePage.css";
import {Card, CardBody, CardTitle} from "reactstrap";

function QuestionarePage({onQuestionareComplete}) {
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
                    iscore: 3,
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
            onQuestionareComplete(); // Transition to the next component/page
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestion > 0 && currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div className="questionare d-flex justify-content-center align-items-center container-body" style={{ height: '100vh' }}>
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    {/*<CardText>*/}
                    {/*  Some quick example text to build on the card title and make up*/}
                    {/*  the bulk of the card's content.*/}
                    {/*</CardText>*/}
                    <div>
                        {showScore ? (
                            <div className="score-section">
                                You scored {totalScore} out of{" "}
                                {questions.reduce((total, q) => total + q.score, 0)}
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
                                    {questions[currentQuestion].answerInput ? (
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
                                        />
                                    ) : (
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
                                    <button className="questionare-button" onClick={handlePrevQuestion}>Prev</button>
                                    <button className="questionare-button" onClick={handleNextQuestion}>Next</button>
                                </div>
                            </>
                        )}
                    </div>
                    {/*<Button*/}
                    {/*    color="primary"*/}
                    {/*    href="#pablo"*/}
                    {/*    onClick={e => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  Go somewhere*/}
                    {/*</Button>*/}
                </CardBody>
            </Card>
        </div>
    );
}

export default QuestionarePage;
