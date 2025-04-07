// src/components/Portfolio.jsx
import React from 'react'
import portfolio01 from '../assets/budget-site.png'
import portfolio02 from '../assets/sushi-site.png'
import portfolio03 from '../assets/react-jobs.png'
import portfolio04 from '../assets/assembly-endgame.png'

const portfolioItems = [
  {
    id: 1,
    imgSrc: portfolio01,
    alt: 'Budget Planner',
    githubURL: 'https://github.com/yasin1122/budget-app',
    liveURL: 'https://budget-app-two-tau.vercel.app/'
  },
  {
    id: 2,
    imgSrc: portfolio02,
    alt: 'Sushi Front End',
    githubURL: 'https://github.com/yasin1122/sushi-site',
    liveURL: 'https://sushi-site.vercel.app/'
  },
  {
    id: 3,
    imgSrc: portfolio03,
    alt: 'React Job Postings',
    githubURL: 'https://github.com/yasin1122/react-jobs',
    liveURL: 'https://react-jobs-proj.netlify.app/'
  },
  {
    id: 4,
    imgSrc: portfolio04,
    alt: 'Assembly Endgame',
    githubURL: 'https://github.com/yasin1122/Assembly-Endgame',
    liveURL: 'https://assembly-endgame-proj.netlify.app/'
  }
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
          <div
            key={item.id}
            className='portfolio__item'>
            <a
              href={item.liveURL}
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__link'>
              <img
                src={item.imgSrc}
                alt={item.alt}
                className='portfolio__img'
              />
              <div className='portfolio__overlay'>
                <p>{item.alt}</p>
              </div>
            </a>
            <a
              href={item.githubURL}
              target='_blank'
              rel='noopener noreferrer'
              className='portfolio__github'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
