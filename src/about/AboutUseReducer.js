import {useState} from 'react'
import Usereducer from '../use-reducer/Usereducer';

function AboutUseReducer() {

  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setClick] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick  = () => {
    setClick(!isClicked)
  }
  return (

    <>
    <div className='about'>

      <h2 className='about-heading'>UseReducer</h2>

          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            {isHovering ? 
               <div className='about-text-hover'>
                <p>
                Приймає редюсер типу (state, action) {'=>'} newState 
                <br />
                Повертає поточний стан і dispatch.
                </p>
                </div>
               : <p className='description'>Show description</p>}
            
          </div>
          <button className='button-component' onClick={handleClick}>Show example</button>
    </div>
    
    <div>
        {isClicked && <Usereducer/>}
    </div>
    </>
  )
}

export default AboutUseReducer