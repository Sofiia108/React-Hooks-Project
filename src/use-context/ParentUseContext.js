import React, { useState } from 'react'
import { CounterContext } from './CounterContext';
import Usecontext from './Usecontext';

function ParentUseContext() {

    const [counter, setCounter] = useState(0);
    
    const increment = () => { 
        setCounter(counter + 1) 
    }
    const decrement = () => {
        setCounter(counter - 1) 
    }
    
    return (
        
        <div>
            <h5>Parent UseContext</h5>
            <h6>{counter}</h6>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <hr></hr>
            {/* ЦЕ НЕ ХАРКОДЕД VALUE*/}
            <CounterContext.Provider value={{counter, setCounter}}>
                <Usecontext />
            </CounterContext.Provider>
            {/*
            Це харкодед value
            <CounterContext.Provider>
                <Usecontext counter={counter}/>
            </CounterContext.Provider>
            */}
        </div>
    )
}

export default ParentUseContext