// src/components/Portfolio.jsx
import { Link } from 'react-router-dom'
import portfolio01 from '../assets/portfolio-01.jpg'
import portfolio02 from '../assets/portfolio-02.jpg'
import portfolio03 from '../assets/portfolio-03.jpg'
import portfolio04 from '../assets/portfolio-04.jpg'

const portfolioItems = [
  { id: 1, imgSrc: portfolio01, alt: 'Portfolio 01' },
  { id: 2, imgSrc: portfolio02, alt: 'Portfolio 02' },
  { id: 3, imgSrc: portfolio03, alt: 'Portfolio 03' },
  { id: 4, imgSrc: portfolio04, alt: 'Portfolio 04' }
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
