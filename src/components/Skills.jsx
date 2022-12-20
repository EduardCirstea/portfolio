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
              Working on the apperance, layout and content of the page , i can
              transform your idea in reality and be aestheically pleasant to
              suits your expectations.Solving the problems with the same level
              of thinking that created them.
            </p>
          </div>
        </div>
        <div className="col-3">
          <div className="skills-row">
            <BsPencil />
            <h3>Problem Solving</h3>
          </div>
          <div className="skill">
            <p>
              1.Identity and understand the right problem. 2.Research the
              systems and practices behind the problem. 3.Visualise the problem.
              4.Brainstorm creative solutions. 5.Identify the best answer.
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
              Just like your personal identity makes you uniquely you, your
              brand identity is the special sauce for your business that sets
              you apart from every other Tom, Dick and Harry, Inc. on the block.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
