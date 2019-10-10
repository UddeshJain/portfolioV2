import React, { useState } from 'react';
import { Link } from '@reach/router';
import '../style/header.css'

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
      {open ? (
        <div className="menu_list_container">
          <ul onClick={handleClick}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/blogs"><li>Blogs</li></Link>
            <li>About</li>
            <li>Projects</li>
            <li>Projects</li>
            <li>Projects</li>
          </ul>
        </div>
      ) : null }
    </div>
  )
}

export default Header;