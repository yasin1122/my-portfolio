import picTall from '/src/assets/suny-bg.jpg'

// src/components/About.jsx
export default function About() {
  return (
    <section
      className='about-me'
      id='about'>
      <h2 className='section__title section__title--about'>📍 Kent, WA</h2>
      <p className='section__subtitle section__subtitle--about'>
        Willing to Commute, Work Remotely, Travel or Relocate!
      </p>
      <div className='about-me__body'>
        <p>
          Full Stack Engineer with strong technical skills and a passion for
          programming. I have authored 15 beginner- friendly books and created
          free programming courses. As a natural problem solver, I tackle
          challenges with enthusiasm and consistently deliver reliable, on-time
          results. Outside of work, my daily running routine keeps me
          disciplined and focused.Outside of work, my daily running routine
          keeps me disciplined and focused.
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
