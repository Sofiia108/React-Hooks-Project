import React, {useState, useMemo, useEffect} from 'react'


function Usememo() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  
  // запам'ятовує(кешує) значення number і ререндерить компонент в залежності від того чи number змінився чи ні
  
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  
  // порівняння об'єктів за значенням а не за посиланням
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme changed')
  }, [dark])

  return (
    <>
      <input type='number' value={number} onChange={e => {
        setNumber(parseInt(e.target.value))
      }}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

export default Usememo

function slowFunction(num) {
  console.log('Calling Slow function')
  for(let i = 0; i < 1000000000; i++){}
  return num * 2
}