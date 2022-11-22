import {React, useState, useRef, useEffect} from 'react'

function Useref() {

  const [name, setName] = useState('');
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name} and it used to be {prevName.current}</div>
    </>    
  )
}

export default Useref

//1
/*
function Useref() {

  const [name, setName] = useState('');
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <div>I rendered {renderCount.current} times</div>
    </>
  )
}
*/

//FOCUS
/*
function Useref() {

  const [name, setName] = useState('');
  const inputRef = useRef()

  function focus() {
    inputRef.current.focus()
  }

  
  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My name is {name}</div>
    <button onClick={focus}>Focus</button>
    </>
  )
}
*/