import {useState} from 'react'
import Useref from '../use-ref/Useref';
function AboutUseRef() {

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

      <h2 className='about-heading'>UseRef</h2>

      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          
          {isHovering ? 
            <div className='about-text-hover'>
            <p>useRef повертає об'єкт з властивістю current: initialValue</p>
            <p>Використовується для зміни елемента без його ререндеру і для посилання на ел всередині html, <br />
            бо кожен html ел має властивість ref</p>
            </div>
            : <p className='description'>Show description</p>}
      </div>

    <button className='button-component' onClick={handleClick}>Show example</button>
         
    </div>

    <div>
        {isClicked && <Useref />}
    </div>
    </>
  )
}

export default AboutUseRef