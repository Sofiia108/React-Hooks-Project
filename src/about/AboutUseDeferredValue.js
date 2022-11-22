import React from 'react'
import useDeferredValue from '../assets/useDeferredValue.png'

function AboutUseDeferredValue() {
  return (
    <div>        
        <h2>UseDeferredValue</h2>
        <small>Debounce, throttling</small>
        <small>Якщо ввести asdf без delay між кожним key press</small>
        <img src={useDeferredValue} />
    </div>
  )
}

export default AboutUseDeferredValue