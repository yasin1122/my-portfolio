import picTall from '/src/assets/yasin-tall.jpeg'

// src/components/About.jsx
export default function About() {
  return (
    <section
      className='about-me'
      id='about'>
      <h2 className='section__title section__title--about'>Who I am</h2>
      <p className='section__subtitle section__subtitle--about'>
        Designer & developer based out of NYC
      </p>
      <div className='about-me__body'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img
        src={picTall}
        alt='Picture of Yasin Cakal'
        className='about-me__img'
      />
    </section>
  )
}
