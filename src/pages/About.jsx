import logo from '../assets/phot.jpg'
import './about.css'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai'

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about-content">
          <img src={logo} alt="#" />
          <div>
            <h2>
              About <span>Me</span>
            </h2>
            <h4 className="about-skills">
              Skills: HTML5 / CSS3 / JavaScript / NPM / GIT (Git Hub) / React /
              NodeJS/Express.js / MongoDB/Mongoose / Testing with Jest /
              End-to-End testing - Cypress / react testing library / Jira /
              Figma / JSON / Redux toolkit / React Router Dom / Axios / Visual
              Studio Code / Sass / Tailwind / Postman / REST / C / C++
            </h4>
            <p>
              I'm a Fullstack Developer located in Romania with a serious
              passion for creating intiuitive, dynamic user experiences.
            </p>
            <p>
              Well organised person , problem solver, independent employee with
              high attention to detail . Fan of economics, outdoor
              activities,gym and Tv series
            </p>
            <p>
              A full-stack developer knows no bounds. I can conjur a website
              from nothing into existence, fully formed. I do not use tricks,
              nor is this magic. I specialize in manipulating the very fabric of
              the web, its raw materials of HTML, CSS and JavaScript
            </p>
            <p className="share">
              <span className="bold">Share:</span>
              <a
                href="https://www.linkedin.com/in/eduard-cirstea-1ba2a022b/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/EduardCirstea"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://twitter.com/CirsteaEduard7"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.instagram.com/cirstea_eduard7/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
