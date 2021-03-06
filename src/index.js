import React, {useState} from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import ThemeContext from './components/themeContext';
import Header from './components/header';
import Home from './components/homePage';
import Blogs from './components/blogs';
import Skills from './components/skills';
import Projects from './components/projects';

const App = () => {
  const theme = useState('')
  const root = document.documentElement;
  if (theme[0] === "darkTheme") {
    root.style.setProperty("--bg", "black");
    root.style.setProperty("--bg-text", "white");
  }
  else {
    root.style.setProperty("--bg", "white");
    root.style.setProperty("--bg-text", "black");
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UddeshJain</title>
        <meta name="description" content="Uddesh's portfolio website." />
        <link rel="canonical" href="https://uddesh.me" />
      </Helmet>
      <div>
        <Header />
        <Router>
          <Home path="/" />
          <Blogs path="/blogs" />
          <Skills path="/skills" />
          <Projects path="/projects" />
        </Router>
      </div>
    </ThemeContext.Provider>
  )
}

render(<App />, document.getElementById("root"));