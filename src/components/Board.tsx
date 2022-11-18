import AtomsPanel from './AtomsPanel'
import ButtonsPanel from './ButtonsPanel'

const Board = () => {

    return (
        <div className="md:flex">
            <AtomsPanel />
            <ButtonsPanel />
        </div>
    )
}

export default Board