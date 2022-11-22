import React, { useState, useCallback } from 'react'
import List from './List'

function Usecallback() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  /*
  useMemo: getItems = [number, number + 1, number + 2]
  useMemo не повертає функцію, а тільки її значення

  const getItems = useMemo(() => {
    return [number, number + 1, number + 2]
  }, [number])

  useCallback повертає функцію
  useCallback: getItems = () => {
    return [number, number + 1, number + 2]
  }
  */

// see List.js: setItems(getItems(5)) 5 - це incrementor
  const getItems = useCallback((incrementor) => {
    return [number, number + incrementor, number + incrementor + 1]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  
  return (
    <div style={theme}>
      <input 
        type='number'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems}/>
    </div>
  )
}

export default Usecallback