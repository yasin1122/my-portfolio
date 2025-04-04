// src/components/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import picSquare from '/src/assets/yasin-square.jpg'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(prev => !prev)
  }

  return (
    <header className={navOpen ? 'nav-open' : ''}>
      <div className='logo'>
        <img
          className='header-img'
          src={picSquare}
          alt='Logo'
        />
      </div>
      <button
        className='nav-toggle'
        onClick={toggleNav}
        aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/'
              className='nav__link'>
              Home
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#services'
              className='nav__link'>
              My Services
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#about'
              className='nav__link'>
              About me
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#work'
              className='nav__link'>
              My Work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
