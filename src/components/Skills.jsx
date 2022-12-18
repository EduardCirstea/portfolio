import { MdOutlineDesktopWindows } from 'react-icons/md'
import { BiNetworkChart } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import './style/skills.css'
function Skills() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="skills-row">
            <MdOutlineDesktopWindows />
            <h3>Web Design</h3>
          </div>
          <div className="skill">
            <p>
              Brought a to just try that with my boss; I'd get kicked out on the
              spot. But who's knows maybe the better
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="skills-row">
            <BsPencil />
            <h3>Illustrator</h3>
          </div>
          <div className="skill">
            <p>
              Brought a to just try that with my boss; I'd get kicked out on the
              spot. But who's knows maybe the better
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="skills-row">
            <BiNetworkChart />
            <h3>Branding Identity</h3>
          </div>
          <div className="skill">
            <p>
              Brought a to just try that with my boss; I'd get kicked out on the
              spot. But who's knows maybe the better
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
