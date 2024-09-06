

import { useState } from 'react'

export default function Navigation() {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-logo'>
          <p>LOGO</p>
        </div>
        <div className="navbar-links">
          <a className='active'  href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p className='navbar-mobile-btn' onClick={()=>setIsOpenMobile(!isOpenMobile)}>
          <span class="material-icons">
              menu
          </span>
        </p>
        <div className={isOpenMobile ? 'navbar-mobile-links' : 'navbar-mobile-links hidden-links'}>
            <a className='active' href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
    </nav>
    </>
  )
}
