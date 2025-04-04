// src/components/PortfolioItem.jsx
import { useParams, Link } from 'react-router-dom'
import portfolio01 from '../assets/portfolio-01.jpg'
import portfolio02 from '../assets/portfolio-02.jpg'
import portfolio03 from '../assets/portfolio-03.jpg'
import portfolio04 from '../assets/portfolio-04.jpg'
import portfolio05 from '../assets/portfolio-05.jpg'
import portfolio06 from '../assets/portfolio-06.jpg'
import portfolio07 from '../assets/portfolio-07.jpg'
import portfolio08 from '../assets/portfolio-08.jpg'
import portfolio09 from '../assets/portfolio-09.jpg'
import portfolio10 from '../assets/portfolio-10.jpg'

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
  },
  5: {
    title: 'Portfolio 05',
    description: 'Detailed info about portfolio project 05.',
    imgSrc: portfolio05
  },
  6: {
    title: 'Portfolio 06',
    description: 'Detailed info about portfolio project 06.',
    imgSrc: portfolio06
  },
  7: {
    title: 'Portfolio 07',
    description: 'Detailed info about portfolio project 07.',
    imgSrc: portfolio07
  },
  8: {
    title: 'Portfolio 08',
    description: 'Detailed info about portfolio project 08.',
    imgSrc: portfolio08
  },
  9: {
    title: 'Portfolio 09',
    description: 'Detailed info about portfolio project 09.',
    imgSrc: portfolio09
  },
  10: {
    title: 'Portfolio 10',
    description: 'Detailed info about portfolio project 10.',
    imgSrc: portfolio10
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
