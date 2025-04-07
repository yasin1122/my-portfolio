// src/components/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(prev => !prev)
  }

  return (
    <header className={navOpen ? 'nav-open' : ''}>
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
              Education
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#about'
              className='nav__link'>
              About
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#work'
              className='nav__link'>
              Projects
            </Link>
          </li>
          <li className='nav__item'>
            <Link
              onClick={toggleNav}
              to='/#footer'
              className='nav__link'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
