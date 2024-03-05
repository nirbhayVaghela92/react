import { useCallback, useState } from "react";
import QUESTION from '../question.js';
import Question from "./Question.jsx";
import quizIsCompletedLogo from '../assets/quiz-complete.png';
import LastSummaryBox from "./LastSummaryBox.jsx";


export default function Quiz() {
    const [userAnswers, setUserAnswer] = useState([]);

    const activeQusetionIndex = userAnswers.length;
    const quizIsCompleted = activeQusetionIndex === QUESTION.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((preAnswer) => {
            return [...preAnswer, selectedAnswer];
        });

    }, []);

    const handleSkipQuestion = useCallback(
        () => handleSelectAnswer(null)
        , [handleSelectAnswer]);

    if (quizIsCompleted) {
        return <div id="summary">
            <img src={quizIsCompletedLogo} alt="Tropy Logo" />
            <h2>Quiz Completed</h2>
        </div>
    }

    return (
        <div id="quiz">
            <Question
                key={activeQusetionIndex}
                index={activeQusetionIndex}
                onSkipAnswer={handleSkipQuestion}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    )
}
