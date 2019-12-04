import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import ThemeContext from './themeContext';

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
            <a href="https://drive.google.com/uc?export=download&id=1mo0uvtzleuFkBQEjYZjhsuVqllWvANux">
              <li>Resume
                <i className="fas fa-download"></i>
              </li>
            </a>
          </ul>
        </div>
      ) : null }
    </div>
  )
}

export default Header;