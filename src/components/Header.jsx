// src/components/Header.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

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
            <HashLink
              onClick={toggleNav}
              smooth
              to='/#services'
              className='nav__link'>
              Education
            </HashLink>
          </li>
          <li className='nav__item'>
            <HashLink
              onClick={toggleNav}
              smooth
              to='/#about'
              className='nav__link'>
              About
            </HashLink>
          </li>
          <li className='nav__item'>
            <HashLink
              onClick={toggleNav}
              smooth
              to='/#work'
              className='nav__link'>
              Projects
            </HashLink>
          </li>
          <li className='nav__item'>
            <HashLink
              onClick={toggleNav}
              smooth
              to='/#footer'
              className='nav__link'>
              Contact Me
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
