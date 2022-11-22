import {useState }from 'react'
import Useeffect from '../use-effect/Useeffect';

function AboutUseEffect() {

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

      <h2 className='about-heading'>UseEffect</h2>

      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          
          {isHovering ? 
              <div className='about-text-hover'>
                  <p>Заміна для методів життєвого циклу <br />
                    componentDidMount, componentDidupdate, componentWillUnmount <br /></p>
                  <p>
                  useEffect (з 1 аргументом) викликається коли component mounted or updated: <br />
                    тобто коли component відобразився на сторінці або коли змінився state <br />
                  </p>  
                  <p>
                  useEffect (з 2 арг = [ ]) викликається ТІЛЬКИ коли component mount <br />
                  </p>
                  <p>
                  useEffect (з 2 арг = [ dependencyItem ]) викликається коли com mount і коли частина state (тобто dependencyItem) зміниться<br /> 
                    в useEffect return - це фун, яка викон componentDidUnmount
                  </p> 
              </div>
              : <p className='description'>Show description</p>}
        </div>

        <button className='button-component' onClick={handleClick}>Show example</button>
       
    </div>
  
    <div>
     {isClicked && <Useeffect />}
    </div>
    </>
  )
}

export default AboutUseEffect