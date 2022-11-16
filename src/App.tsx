import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
      <h1>Counting Atoms Game</h1>
      <p className="p-10">
        Pick one or more numbers that sum to the number of React atoms
      </p>
      <Board />
    </>
  )
}

export default App
