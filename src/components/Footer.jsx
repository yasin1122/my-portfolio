// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className='footer'>
      <a
        href='yasincakal@gmail.com'
        className='footer__link'>
        yasincakal@gmail.com
      </a>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://codepen.io'>
            <i className='fab fa-codepen'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='http://dribbble.com'>
            <i className='fab fa-dribbble'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://twitter.com'>
            <i className='fab fa-twitter'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='https://github.com'>
            <i className='fab fa-github'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}
