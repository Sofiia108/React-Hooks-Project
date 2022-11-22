import React, { useState, useEffect, useRef} from 'react'

function Useref_previous_state() {

    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);
    const previousCounterRef = useRef('');

    useEffect(() => {
        previousCounterRef.current = counter;

    }, [counter])
  return (
    <small>
        <h6>Показати попередній стан</h6>
        <h6>Random Counter : {counter}</h6>
        {typeof previousCounterRef.current !== 'undefined' && (
            <h6>Previous Counter : {previousCounterRef.current}</h6>
        )}
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
            Genetate Number
        </button>
    </small>
  )
}

export default Useref_previous_state