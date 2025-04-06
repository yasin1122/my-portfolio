// src/components/PortfolioItem.jsx
import { useParams, Link } from 'react-router-dom'
import portfolio01 from '../assets/portfolio-01.jpg'
import portfolio02 from '../assets/portfolio-02.jpg'
import portfolio03 from '../assets/portfolio-03.jpg'
import portfolio04 from '../assets/portfolio-04.jpg'

const portfolioData = {
  1: {
    title: 'Portfolio 01',
    description:
      'Detailed info about portfolio project 01. Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate.',
    imgSrc: portfolio01
  },
  2: {
    title: 'Portfolio 02',
    description: 'Detailed info about portfolio project 02.',
    imgSrc: portfolio02
  },
  3: {
    title: 'Portfolio 03',
    description: 'Detailed info about portfolio project 03.',
    imgSrc: portfolio03
  },
  4: {
    title: 'Portfolio 04',
    description: 'Detailed info about portfolio project 04.',
    imgSrc: portfolio04
  }
}

export default function PortfolioItem() {
  const { id } = useParams()
  const item = portfolioData[id]

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div className='portfolio-item-individual'>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img
        src={item.imgSrc}
        alt={item.title}
      />
      <Link
        to='/'
        className='btn'>
        Back to Portfolio
      </Link>
    </div>
  )
}
