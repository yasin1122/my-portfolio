// src/components/Portfolio.jsx
import { Link } from 'react-router-dom'
import portfolio01 from '../assets/budget-site.png'
import portfolio02 from '../assets/sushi-site.png'
import portfolio03 from '../assets/react-jobs.png'
import portfolio04 from '../assets/assembly-endgame.png'

const portfolioItems = [
  { id: 1, imgSrc: portfolio01, alt: 'Budget Planner' },
  { id: 2, imgSrc: portfolio02, alt: 'Sushi Front End' },
  { id: 3, imgSrc: portfolio03, alt: 'React Job Postings' },
  { id: 4, imgSrc: portfolio04, alt: 'Assembly Endgame' }
]

export default function Portfolio() {
  return (
    <section
      className='my-work'
      id='work'>
      <h2 className='section__title section__title--work'>Projects</h2>
      <p className='section__subtitle section__subtitle--work'>
        A Selection of My Personal Projects
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
