import { useState } from "react"
export const Functions = ({p}) => {
    const [counter, setCounter] = useState(p) 
    
    const handleAdd = ()=> {
        setCounter(counter + 1)
        console.log(counter)
    }
    const resta = ()=> {
        setCounter(counter - 1)
        console.log(counter)
    }
    const reset = ()=> {
        setCounter(p)
        console.log(counter)
    }
  return (
    <> 
    <h1>counter</h1>   
    <button onClick={() => handleAdd()}>mas</button>
    <button onClick={() => resta()}>menos</button>
    <button onClick={() => reset()}>reset</button>
    <span> {counter}</span>
    </>
  )
}