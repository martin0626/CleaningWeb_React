

import { useState, useEffect } from 'react'

export default function Navigation({onNavigate}) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [visibleNav, setVsisibleNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleOpenNav = ()=>{
    setIsOpenMobile(!isOpenMobile);
  }

  const handleLinkSelection = (e)=>{
    const section = e.target.getAttribute('link-attr');
    setIsOpenMobile(false);
    onNavigate(section);
  }

   // Scroll handler to determine scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setVsisibleNav(false);
    } else {
      // Scrolling up
      setVsisibleNav(true);
    }

    setLastScrollY(currentScrollY);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, [lastScrollY]);




  return (
    <>
      <nav className={visibleNav ? 'navbar showedNav' : 'navbar'}>
        <div className='navbar-logo'>
          <p>LOGO</p>
        </div>
        <div className="navbar-links">
          <a onClick={handleLinkSelection} link-attr={'home'}>Home</a>
          <a onClick={handleLinkSelection} link-attr={'services'}>Services</a>
          <a onClick={handleLinkSelection} link-attr={'process'}>Process</a>
          <p className='secondaryBtn' onClick={handleLinkSelection} link-attr={'book'}><span>Contact</span></p>
        </div>

        <p className='navbar-mobile-btn' onClick={handleOpenNav}>
          <span className="material-icons">
              menu
          </span>
        </p>
        <div className={isOpenMobile ? 'navbar-mobile-links' : 'navbar-mobile-links hidden-links'}>
          <a onClick={handleLinkSelection} link-attr={'home'}>Home</a>
          <a onClick={handleLinkSelection} link-attr={'services'}>Services</a>
          <a onClick={handleLinkSelection} link-attr={'process'}>Process</a>
          <p className='secondaryBtn' onClick={handleLinkSelection} link-attr={'book'}><span>Contact</span></p>
          
        </div>
    </nav>
    </>
  )
}