import React, { useState } from 'react';
import { Link } from '@reach/router';
import '../style/header.css';
import '../style/style.css';
import moonSvg from '../assets/moon.svg';
import sunSvg from '../assets/sun.svg';

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  
  return (
    <div className="header">
      <div className={open ? "menu_button change" : "menu_button"} onClick={handleClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
      </div>
      <div className="header_list">
        <Link to='/'><li>Home</li></Link>
        <Link to='/blogs'><li>Blogs</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
      </div>
      {/* TODO theme is not working */}
      <div className="theme_icon dark">
        <img src={moonSvg} />
      </div>
      {open ? (
        <div className="menu_list_container">
          <ul onClick={handleClick}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/blogs"><li>Blogs</li></Link>
            <Link to="/skills"><li>Skills</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
          </ul>
        </div>
      ) : null }
    </div>
  )
}

export default Header;