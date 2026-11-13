import './App.css'

const WORD_COUNT = 100
const MESSAGE = 'I Love Rath🩷'

function App() {
  return (
    <main
      className="heart"
      role="img"
      aria-label={`Animated heart made from the words ${MESSAGE}`}
    >
      {Array.from({ length: WORD_COUNT }, (_, index) => (
        <span
          className="heart__item"
          key={index}
          aria-hidden="true"
          style={{ animationDelay: `${-(index + 1) * 300}ms` }}
        >
          <span className="heart__word">{MESSAGE}</span>
        </span>
      ))}
    </main>
  )
}

export default App
