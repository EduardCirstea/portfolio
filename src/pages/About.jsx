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
            <p>
              For instance, whenever I go back to the guest house during the
              morning to copy out the contract, these gentlemen are always still
              sitting there eating their breakfasts. I ought to just try that
              with my boss; I'd get kicked out on the spot.
            </p>
            <p>
              But who knows, maybe that would be the best thing for me. He'd
              fall right off his desk! And it's a funny sort of business to be
              sitting up there at your desk, talking down at your subordinates.
              I ought to just try that witht my boss; I'd get kicked out on the
              spot. But who knows, maybe that would be the best thing for me.
              He'd fall right off his desk! And it's a funny sort of business to
              be sitting up there at your desk, talking down at your
              subordinates.
            </p>
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
        </div>
      </div>
    </div>
  )
}

export default About
