import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <p>hey, I'm</p>
        <h1>Uddesh</h1>
      </div>
      <div className="profile_container">
        <div className="profile_picture">
          <a href="https://www.linkedin.com/in/uddeshjain/" target="_blank">
            <img src="https://i.ibb.co/52sMn0Z/profile.png" alt="profile" border="0" />
          </a>
        </div>
        <div className="job_title"><p><b>full stack developer</b></p></div>
        <div className="job_description">
          <p>javascript lover | reactjs | breaking things | making them better</p>
        </div>
      </div>
      <div className="icons">
        <a href="https://github.com/UddeshJain" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://dev.to/uddeshjain" target="_blank"><i className="fab fa-dev"></i></a>
        <a href="https://www.linkedin.com/in/uddeshjain/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/Uddesh_" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://uddesh-awesome-portfolio.firebaseapp.com/" target="_blank"><i className="fas fa-globe"></i></a>
      </div>
      <a className="dark" href="https://www.google.com/search?q=UddeshJain" target="_blank"><p>google <b>UddeshJain</b></p></a>
    </div>
  )
}

export default Home;