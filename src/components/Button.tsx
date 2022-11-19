
interface ButtonInterface{
    display: number
}

const Button = (props:ButtonInterface) => {

    return <button className="inline-block text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-lg text-center h-12 w-1/5 my-5 mx-3">{props.display}</button>
}

export default Button