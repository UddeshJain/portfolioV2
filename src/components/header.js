import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import ThemeContext from './themeContext';
import '../style/header.css';
import '../style/style.css';

const Header = () => {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useContext(ThemeContext)

  const handleClick = () => {
    setOpen(!open)
  }
  
  const handleTheme = () => {
    if (theme == '') {
      setTheme('darkTheme')
    }
    else {
      setTheme('')
    }
  }
  return (
    <div className="header">
      <div className='menu_button' onClick={handleClick}>
        {open ?
          (<i className="fas fa-times" style={{ color: "white" }}></i>) :
          (<i className="fas fa-bars"></i>)}
      </div>
      <div className="header_list">
        <Link to='/'><li>Home</li></Link>
        <Link to='/blogs'><li>Blogs</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
      </div>
      {/* TODO theme is not working */}
      <div className="theme_icon" onClick={handleTheme}>
        {theme === '' ?
          (<i className="fas fa-moon"></i>) :
          (<i className="fas fa-sun"></i>)}
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