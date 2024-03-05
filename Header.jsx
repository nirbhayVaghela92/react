import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return <header>
    <img src={logoImg} alt="Quiz logo" />
    <h2>ReactQuiz</h2>
  </header>
}
