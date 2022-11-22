import {useState} from 'react'
import Usecallback from '../use-callback/Usecallback';

function AboutUseCallback() {
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

        <h2 className='about-heading'>UseCallback</h2>

            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            {isHovering ? 
              <div className='about-text-hover'>
              <p>Приймає функцію, array of dependencies</p>
              <p>Повертає мемоізовану версію функції зворотнього виклику, <br />
              яка змінюється лише тоді, коли одна з її залежностей змінюється</p>
            </div>
            : <p className='description'>Show description</p>}

            </div>

            <button className='button-component' onClick={handleClick}>Show example</button>
      </div>
      
      <div>
        {isClicked && <Usecallback/>}
      </div>
    </>
  )
}

export default AboutUseCallback