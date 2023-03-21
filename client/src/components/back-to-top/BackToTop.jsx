import React , {useEffect , useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const BackToTop = () => {
    const [showButton,setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollHeight = () => {
          if (!showButton && window.pageYOffset > 3300) {
            setShowButton(true);
          } else if (showButton && window.pageYOffset <= 3300) {
            setShowButton(false);
          }
        };
    
        window.addEventListener('scroll', checkScrollHeight);
        return () => {
          window.removeEventListener('scroll', checkScrollHeight);
        };
      }, [showButton]);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <FaArrowCircleUp className="scrolltop" onClick={scrollToTop} style={{height: 40, display: showButton ? 'flex' : 'none'}}/>
  )
}

export default BackToTop
