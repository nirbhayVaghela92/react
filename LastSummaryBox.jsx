import quizIsCompletedLogo from '../assets/quiz-complete.png';
import QUESTION from '../question.js';

export default function LastSummaryBox({userAnswers}) {
    return (
        <div id="summary">
            <img src={quizIsCompletedLogo} alt="Tropy Logo" />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>ansered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTION[index].text}</p>
                            <p className='user-answer'>{answer}</p>
                        </li>
                    );
                }
                )}

            </ol>
        </div>
    );
}
