import React from 'react'
import './header.css'
import { Link } from 'react-scroll'
import { BsArrowRightShort } from 'react-icons/bs'
import TypeWritterEffect from '../components/TypeWritterEffect'
import pdf from '../sampe.pdf'

function Header() {
  return (
    <div id="home" className="header">
      <div className="container">
        <div className="content-header">
          <h1>
            Hi! I'm <span>Cirstea Eduard</span>
          </h1>
          <h2>
            <TypeWritterEffect />
          </h2>
          <div className="btn-group">
            <Link
              // activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn"
            >
              My Projects
            </Link>
            <a href={pdf} target="_blank" className="btn">
              View Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
