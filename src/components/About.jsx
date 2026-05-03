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
          Software Engineer with a proven track record at Truveta, where I became the
          <strong>first engineer to implement CI testing</strong>, achieving 80% code coverage
          across the stack. I transformed page load times from 30 seconds to under 1 second,
          owned security for 20+ engineers, and built scalable full-stack features adopted team-wide.
        </p>
        <p>
          My expertise spans TypeScript, React, .NET, and Playwright testing, with a focus on
          performance optimization and developer experience. I hold a B.S. in Computer Science
          from SUNY Albany (Cum Laude) and bring experience from previous roles at Code of Code
          and as a Freelance Developer.
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
