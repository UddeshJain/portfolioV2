import React from 'react';

const Skills = () => {
  return (
    <div className="skills_container">
      <h1>Technical Skills</h1>
      <div className="skills">
        <div className="skills_left">
          <div className="skill">
            <div className="skill_text">
              <p>JavaScript</p>
              <p>80%</p>
            </div>
            <progress max="100" value="80"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>NodeJS</p>
              <p>70%</p>
            </div>
            <progress max="100" value="70"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>React</p>
              <p>80%</p>
            </div>
            <progress max="100" value="80"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>Redux</p>
              <p>60%</p>
            </div>
            <progress max="100" value="60"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>MongoDB</p>
              <p>65%</p>
            </div>
            <progress max="100" value="65"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>ExpressJS</p>
              <p>70%</p>
            </div>
            <progress max="100" value="70"></progress>
          </div>
        </div>

        <div className="skills_right">
          <div className="skill">
            <div className="skill_text">
              <p>Python</p>
              <p>70%</p>
            </div>
            <progress max="100" value="70"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>HTML</p>
              <p>85%</p>
            </div>
            <progress max="100" value="85"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>CSS</p>
              <p>80%</p>
            </div>
            <progress max="100" value="80"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>Flask</p>
              <p>55%</p>
            </div>
            <progress max="100" value="55"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>Git</p>
              <p>60%</p>
            </div>
            <progress max="100" value="60"></progress>
          </div>
          <div className="skill">
            <div className="skill_text">
              <p>REST</p>
              <p>70%</p>
            </div>
            <progress max="100" value="70"></progress>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills;