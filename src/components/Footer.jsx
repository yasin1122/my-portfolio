// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer
      id='footer'
      className='footer'>
      <h3>- Contact Me -</h3>
      <ul className='social-list'>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/yasincakal/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/yasin1122/'>
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='tel:3479274688'>
            <i className='fas fa-phone'></i>
          </a>
        </li>
        <li className='social-list__item'>
          <a
            className='social-list__link'
            href='mailto:cakalyasin88@gmail.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </li>
      </ul>
    </footer>
  )
}
