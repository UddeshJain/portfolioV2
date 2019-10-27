import React from "react";
import '../style/projects.css';
import redirectSvg from '../assets/redirect.svg'

const Projects = () => {
  const data = [
    {
      name: "SINTAX",
      description: "Sintax is a programming language built with JavaScript. It's easy to learn and use.",
      link: "https://github.com/UddeshJain/SINTAX",
      date: "Aug - Oct, 2019"
    },
    {
      name: "ADOPT ME",
      description: "Adopt me is a web app built with reactjs and allows users to adopt a pet.",
      link: "https://github.com/UddeshJain/adopt-me",
      date: "Sept - Oct, 2019"
    },
    {
      name: "MOVIE RENTAL API",
      description: "This API build with NodeJS and allows users to rent a movie. I has authentication and role base access system.",
      link: "https://github.com/UddeshJain/movie_rental_api",
      date: "Aug - Sept, 2019"
    },
    {
      name: "MY WEBSITE V1",
      description: "This is first version of my portfolio website.",
      link: "https://uddesh-awesome-portfolio.firebaseapp.com/",
      date: "June - July, 2019"
    },
    {
      name: "LINUX SERVER CONFIGURATION",
      description: "A baseline installation of a Linux server and prepare it to host web applications, secure your server from a number of attack vectors, install and configure a database server, and deploy one of your existing web applications onto it.",
      link: "https://github.com/UddeshJain/linux_server_configuration",
      date: "June - July, 2019"
    },
    {
      name: "ITEM CATALOG",
      description: "Item Catalog provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items.",
      link: "https://github.com/UddeshJain/item_catalog",
      date: "May - June, 2019"
    },
    {
      name: "LOG ANALYTICS",
      description: "This is an internal reporting tool for newspaper site to discover what kind of articles the site's readers like and it also shows the error log for a particular date.",
      link: "https://github.com/UddeshJain/log-analytics",
      date: "May - June, 2019"
    },
    {
      name: "REACT WEATHER APP",
      description: "Weather web app is very simple to use, just write the city name in the text field and hit get weather button and it will show the current weather.",
      link: "https://weather-app-8827.firebaseapp.com/",
      date: "Nov - Dec, 2018"
    },
    {
      name: "BURGER STORE",
      description: "Burger store allows the user to build a burger with customized ingredients. It also has a login/signup option so The authenticated users can save their orders and repeat the saved orders.",
      link: "https://react-burger-store-24abd.firebaseapp.com/",
      date: "Sept - Oct, 2018"
    },
  ]
  return (
    <div className="projects_container">
      <h1>Some awesome work of mine</h1>
      {/* <i className="fas fa-moon"></i> */}
      <div className="projects_main">
        <div className="wrapper">
          {data.map((data, index) => (
            <div className="project_content" key={index}>
              <div className="redirect"><span>{data.name}</span><a href={data.link} target="_blank"><i className="fas fa-location-arrow"></i></a></div>
              <div className="description"><p>{data.description}</p></div>
              <div><span>{data.date}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;