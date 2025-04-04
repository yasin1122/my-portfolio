// src/components/Portfolio.jsx
import { Link } from 'react-router-dom'
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

const portfolioItems = [
  { id: 1, imgSrc: portfolio01, alt: 'Portfolio 01' },
  { id: 2, imgSrc: portfolio02, alt: 'Portfolio 02' },
  { id: 3, imgSrc: portfolio03, alt: 'Portfolio 03' },
  { id: 4, imgSrc: portfolio04, alt: 'Portfolio 04' },
  { id: 5, imgSrc: portfolio05, alt: 'Portfolio 05' },
  { id: 6, imgSrc: portfolio06, alt: 'Portfolio 06' },
  { id: 7, imgSrc: portfolio07, alt: 'Portfolio 07' },
  { id: 8, imgSrc: portfolio08, alt: 'Portfolio 08' },
  { id: 9, imgSrc: portfolio09, alt: 'Portfolio 09' },
  { id: 10, imgSrc: portfolio10, alt: 'Portfolio 10' }
]

export default function Portfolio() {
  return (
    <section
      className='my-work'
      id='work'>
      <h2 className='section__title section__title--work'>My Work</h2>
      <p className='section__subtitle section__subtitle--work'>
        A selection of my range of work
      </p>
      <div className='portfolio'>
        {portfolioItems.map(item => (
          <Link
            key={item.id}
            to={`/portfolio/${item.id}`}
            className='portfolio__item'>
            <img
              src={item.imgSrc}
              alt={item.alt}
              className='portfolio__img'
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
