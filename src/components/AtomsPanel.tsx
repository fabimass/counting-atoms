import Atom from './Atom'

interface AtomsPanelInterface{
    quantity: number
}

// This component is responsible for showing a passed number of atoms in the screen
const AtomsPanel = (props: AtomsPanelInterface) => {

    // Creates an array pf n elements, one for each atom that will appear in the screen  
    const atoms: Array<number> = Array.from(Array(props.quantity).keys())
    
    return (
      <div className="min-h-[280px] p-1 text-center border-solid border-2 border-indigo-800 md:w-1/2 md:p-4 ">
        { atoms.map( i => <Atom /> ) }
      </div>
    )
      
}

export default AtomsPanel