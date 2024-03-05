import { useRef } from "react";

export default function Answer({ selectedAnswer ,answers ,answerState ,onSelect}) {
    const shuffledAnswer = useRef();

    if (!shuffledAnswer.current) {
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }
    // console.log(shuffledAnswer.current);
    
    return (
        <ul id="answers">
                    {shuffledAnswer.current.map((answer) => {
                        let cssClass = '';
                        const isSelected = selectedAnswer === answer;
                        if (answerState === 'answered' && isSelected) {
                            cssClass = "selected";
                        }
                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClass = answerState;
                        }

                        return (
                            <li key={answer} className="answer">
                                <button className={cssClass} onClick={() => { onSelect(answer) }} disabled={answerState !== ''}>{answer}</button>
                            </li>
                        );
                    }
                    )}
                </ul>
    )
}
// 