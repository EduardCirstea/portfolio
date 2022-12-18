import './project.css'
import Card from '../components/Card'
import { Screen } from '../assets/index'

import { data } from '../data.js'
function Project() {
  return (
    <div className="project" id="project">
      <div className="container">
        <h2>
          Pro<span>jects</span>
        </h2>

        <div className="row">
          {data.map((projectData, i) => (
            <Card key={i} data={projectData} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
