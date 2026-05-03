import picTall from '/src/assets/suny-bg.jpg'

// src/components/About.jsx
export default function About() {
  return (
    <section
      className='about-me'
      id='about'>
      <h2 className='section__title section__title--about'>📍 Bellevue, WA</h2>
      <p className='section__subtitle section__subtitle--about'>
        Willing to Commute, Work Remotely, Travel or Relocate!
      </p>
      <div className='about-me__body'>
        <p>
          Software Engineer (Full Stack) with experience at Truveta, where I
          built testing infrastructure from the ground up, drove 80% code coverage,
          and owned security for two teams. I specialize in React, TypeScript,
          .NET, and E2E testing with Playwright. Previously worked as a Full-Stack
          Developer at Code of Code and as a Freelance Web Developer. I hold a
          B.S. in Computer Science from SUNY Albany (Cum Laude, Dean's List).
          As a natural problem solver, I tackle challenges with enthusiasm and
          consistently deliver reliable, on-time results.
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
