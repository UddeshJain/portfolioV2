import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import './style/style.css';
import Header from './components/header';
import Home from './components/homePage';
import Blogs from './components/blogs';
import Skills from './components/skills';
import Projects from './components/projects';

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Blogs path="/blogs" />
        <Skills path="/skills" />
        <Projects path="/projects" />
      </Router>
    </div>
  )
}

render(<App />, document.getElementById("root"));