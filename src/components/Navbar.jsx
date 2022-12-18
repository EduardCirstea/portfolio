import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './style/navbar.css'
import pdf from '../sampe.pdf'

function Navbar() {
  const [active, setActive] = useState('nav-menu')
  const [icon, setIcon] = useState('nav-toggler')
  const [scrolled, setScrolled] = useState(false)
  const navToggle = () => {
    if (active === 'nav-menu') {
      setActive('nav-menu nav-active')
    } else setActive('nav-menu')

    // Icon Toggler
    if (icon === 'nav-toggler') {
      setIcon('nav-toggler toggle')
    } else setIcon('nav-toggler')
  }
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', changeBg)

  return (
    <nav id="navbar" className={scrolled ? 'nav active' : 'nav'}>
      <div className="container">
        <a href="#home" className="nav-brand">
          <p>
            Portfolio<span>Eduard</span>
          </p>
        </a>
        <ul className={active}>
          <li className="nav-item">
            <Link
              // activeClass="active"
              to="home"
              // spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={scrolled ? 'nav-link' : 'active1 nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="nav-link"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              // activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <a href={pdf} target="_blank" className="nav-link">
              Resume
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
