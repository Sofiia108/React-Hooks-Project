import {useState} from 'react'
import ParentUseContext from '../use-context/ParentUseContext';

function AboutUseContext() {
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

    <h2 className='about-heading'>UseContext</h2>

        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        
        {isHovering ? 
          <div className='about-text-hover'>
          <p>Передавання props без props drilling</p>
          </div>
          : <p className='description'>Show description</p>}
        </div>
        <button className='button-component' onClick={handleClick}>Show example</button>
        
    </div>
      <div>
        {isClicked && <ParentUseContext/>}
      </div>
    </>
  )
}

export default AboutUseContext