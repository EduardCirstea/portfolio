import './style/card.css'
import { Screen } from '../assets/index'
import { AiOutlineArrowRight } from 'react-icons/ai'
function Card({ data }) {
  // const data = {
  //   title: 'Aplicatie de facturare',
  //   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quamquo deserunt, delectus asperiores in ea ad rem eveniet minimaaccusamus quod, ipsa assumenda exercitationem quidem aliquid perspiciatis laborum ab? Molestias dolorem asperiores culpa veniam!Perferendis quam sit aut molestias?',
  //   img: { Screen },
  //   sub: 'Express,React',
  //   linkYt: '#',
  //   linkGithub: '#',
  // }
  return (
    <div className="card">
      <img src={data.img} alt="img" className="card-img" />
      <div className="card-body">
        <h1 className="card-title">{data.title}</h1>
        <p className="card-sub-title">{data.sub}</p>
        <p className="card-info">{data.desc}</p>
        <a href={data.linkGithub} target="_blank" className="card-btn">
          Github Code <AiOutlineArrowRight />
        </a>
        <a href={data.linkYt} target="_blank" className="card-btn">
          Demo Preview <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  )
}

export default Card
