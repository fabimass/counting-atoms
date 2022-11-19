import AtomsPanel from './AtomsPanel'
import ButtonsPanel from './ButtonsPanel'

// This function generates the next number of atoms in screen (between 1 and 9)
const GenerateNewNumber = () => {
    
    const max: number = 9
    const min: number = 1

    return Math.floor(Math.random() * (max - min) ) + min
}

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {

    const numberOfAtoms: number = GenerateNewNumber()

    return (
        <div className="md:flex">
            <AtomsPanel quantity={numberOfAtoms} />
            <ButtonsPanel />
        </div>
    )
}

export default Board