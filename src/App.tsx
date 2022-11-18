import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
      <h1 className="text-3xl md:text-5xl">
        Counting Atoms Game
      </h1>
      <p className="p-5 md:p-10">
        Pick one or more numbers that sum to the number of React atoms
      </p>
      <Board />
    </>
  )
}

export default App
