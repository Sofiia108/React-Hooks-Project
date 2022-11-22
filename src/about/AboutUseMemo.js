import {useState} from 'react'
import Usememo from '../use-memo/Usememo';

function AboutUseMemo() {

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

        <h2 className='about-heading'>UseMemo</h2>

            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          
            {isHovering ? 
              <div className='about-text-hover'>
              <p>запам'ятовує(кешує) значення state і ререндерить компонент в залежності від того чи state змінився</p>
              <p>порівняння об'єктів за значенням а не за посиланням</p>
              </div>
              : <p className='description'>Show description</p>}
            </div>
            
            <button className='button-component' onClick={handleClick}>Show example</button>
                
        </div>

        <div>
            {isClicked && <Usememo />}
        </div>
    </>
  )
}

export default AboutUseMemo