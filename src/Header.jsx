import { useState } from 'react'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(prev => !prev)
  }

  console.log(navOpen)

  return (
    <div className={navOpen ? 'nav-open' : ''}>
      <div>
        <img
          src='src/assets/devjane.png'
          alt=''
        />
      </div>
      <button
        onClick={toggleNav}
        className='nav-toggle'
        aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a
              onClick={toggleNav}
              href='#home'
              className='nav__link'>
              Home
            </a>
          </li>
          <li className='nav__item'>
            <a
              onClick={toggleNav}
              href='#services'
              className='nav__link'>
              My Services
            </a>
          </li>
          <li className='nav__item'>
            <a
              onClick={toggleNav}
              href='#about'
              className='nav__link'>
              About Me
            </a>
          </li>
          <li className='nav__item'>
            <a
              onClick={toggleNav}
              href='#My Work'
              className='nav__link'>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
