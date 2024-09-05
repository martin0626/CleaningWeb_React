import { useState } from 'react';

export default function Navigation(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <li>MyLogo</li>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li to="/" onClick={toggleMenu}><a>Home</a></li>
        <li to="/about" onClick={toggleMenu}><a>About</a></li>
        <li to="/contacts" onClick={toggleMenu}><a>Contact</a></li>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
