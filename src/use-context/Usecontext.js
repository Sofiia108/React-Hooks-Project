import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function Usecontext() {
  const {counter, setCounter} = useContext(CounterContext)
  return (
    <div>
      <h5>Usecontext</h5>
      <h6>{counter}</h6>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <hr></hr>
      <UsecontextChild />
    </div>
  )
}

const UsecontextChild = () => {
  const {counter, setCounter} = useContext(CounterContext);
  return(
  <div>
    <h5>UseContext Child</h5>
    <h6>{counter}</h6>
    <button onClick={() => setCounter(counter - 1)}>Decrement</button>   
  </div>)
}

export default Usecontext