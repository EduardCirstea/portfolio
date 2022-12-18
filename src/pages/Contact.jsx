import './contact.css'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai'

import { Form } from '../components/Form'
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>
          Get In <span>Touch</span>
        </h2>
        <div className="contact-content" id="contact">
          <div className="div1">
            <p>Bucharest,str Basmului ,nr 2-4</p>
            <p>eduard.bussnies28@gmail.com</p>
            <p>Tel: 0756677365</p>
            <p className="share">
              <span className="bold">Share:</span>
              <a
                href="https://www.linkedin.com/in/eduard-cirstea-1ba2a022b/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/EduardCirstea" target="_blank">
                <AiFillGithub />
              </a>
              <a href="https://twitter.com/CirsteaEduard7" target="_blank">
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.instagram.com/cirstea_eduard7/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
