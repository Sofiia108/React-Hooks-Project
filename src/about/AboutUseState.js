import { useState } from 'react';
import Usestate from '../use-state/Usestate';
import './about.css'


function AboutUseState() {

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
          <h2 className='about-heading'>UseState</h2>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {isHovering ? 
                <div className='about-text-hover'>
                <p>
                Повертає array of 2 values:<br />
                  1.State<br />
                  2.Функція, яка оновлює state<br />
                </p>
                <p>
                  Якщо у useState передати функцію як параметр, <br />
                  то вона виконається 1 раз при рендері компонента 
                </p>
                <p>Не мержить state, а override state повністю</p>
                </div>
                : <p className='description'>Show description</p>}
              </div>
              <button className='button-component' onClick={handleClick}>Show example</button>
        </div>
        <div>
          {isClicked && <Usestate />}
        </div>
    </>
       
  );
}

export default AboutUseState