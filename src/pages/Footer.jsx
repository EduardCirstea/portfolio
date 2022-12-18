import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai'

import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h3>Copyright &#169; Cirstea Marcu-Eduard</h3>
      <ul className="link">
        <li>
          <a
            href="https://www.linkedin.com/in/eduard-cirstea-1ba2a022b/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/EduardCirstea" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/CirsteaEduard7" target="_blank">
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cirstea_eduard7/" target="_blank">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
