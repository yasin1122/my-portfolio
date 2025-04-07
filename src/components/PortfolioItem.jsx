// src/components/PortfolioItem.jsx
import { useParams, Link } from 'react-router-dom'
import portfolio01 from '../assets/budget-site.png'
import portfolio02 from '../assets/sushi-site.png'
import portfolio03 from '../assets/react-jobs.png'
import portfolio04 from '../assets/assembly-endgame.png'

const portfolioData = {
  1: {
    title: 'Budgeting App',
    description:
      'A minimalist budgeting app built with React and React Router, enabling users to track income, expenses, and manage budgets with ease.',
    imgSrc: portfolio01,
    gitHubLink: 'https://github.com/yasin1122/budget-app',
    siteURL: 'https://budget-app-two-tau.vercel.app/'
  },
  2: {
    title: 'Sushi Restaurant',
    description:
      'A stylish sushi website featuring modern design and responsive navigation for an immersive user experience.',
    imgSrc: portfolio02,
    gitHubLink: 'https://github.com/yasin1122/sushi-site',
    siteURL: 'https://sushi-site.vercel.app/'
  },
  3: {
    title: 'React Jobs',
    description:
      'A React-powered job board that aggregates listings specifically for React developers, offering a clean, user-friendly interface.',
    imgSrc: portfolio03,
    gitHubLink: 'https://github.com/yasin1122/react-jobs',
    siteURL: 'https://react-jobs-proj.netlify.app/'
  },
  4: {
    title: 'Assembly Endgame',
    description:
      'A Programmers take on the classic "Hangman" game to save the world from the dreaded task of writing Assembly code.',
    imgSrc: portfolio04,
    gitHubLink: 'https://github.com/yasin1122/Assembly-Endgame',
    siteURL: 'https://assembly-endgame-proj.netlify.app/'
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
      <button
        className='btn-link'
        onClick={() =>
          window.open(item.gitHubLink, '_blank', 'noopener,noreferrer')
        }>
        Source Code
      </button>
      <button
        className='btn-link'
        onClick={() =>
          window.open(item.siteURL, '_blank', 'noopener,noreferrer')
        }>
        Live Demo
      </button>
      <img
        src={item.imgSrc}
        alt={item.title}
        style={{ cursor: 'pointer' }}
        onClick={() =>
          window.open(item.siteURL, '_blank', 'noopener,noreferrer')
        }
      />
      <Link
        to='/'
        className='btn'>
        Back to Portfolio
      </Link>
    </div>
  )
}
