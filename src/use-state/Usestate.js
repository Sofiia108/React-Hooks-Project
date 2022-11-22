import React from 'react'
import { useState } from 'react'

function Usestate() {
  
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('pink')

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
    setTheme('pink')
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }
  

  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    </>
     
)
}


export default Usestate

// SIMPLE USE
/*
function Usestate() {

  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
     
)
}
*/

// TIP 1

{/**  
  const [count, setCount] = useState(4);

   function decrementCount() {
    setCount(count - 1)
    setCount(count - 1)

  }
    Після виконання цієї функції count буде 3, а не 2

    Потрібно використовувати функцію
    setCount(prevCount => prevCount - 1)
*/}


// TIP 2
  
/*
  function countInitial() {
    console.log('run function')
    return 4
  }
*/
  
/** 

  countInitial буде викликатись кожен раз коли компонент оновл
  const [count, setCount] = useState(countInitial());

  countInitial буде викликатись 1 раз коли компонент відобразився на сторінці
  const [count, setCount] = useState(() => countInitial());

*/

//TIP 3
  /*
  const [state, setState] = useState({count: 4, theme: 'pink'});
  const count = state.count
  const theme = state.theme

  // Потрібно ...prevState, бо useState не мержить state а override state повністю 

  function decrementCount() {
    setState(prevState => {
      return { ...prevState, count: prevState.count - 1}
    })
  }
  */