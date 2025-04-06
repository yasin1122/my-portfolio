// src/components/Services.jsx
export default function Services() {
  return (
    <section
      className='my-services'
      id='services'>
      <h2 className='section__title section__title--services'>Education</h2>
      <div className='services'>
        <div className='service'>
          <h3>SUNY Albany</h3>
          <p>
            Earned my Bachelor of Science in Computer Science from the
            University at Albany (SUNY) with Cum Laude honors and made the
            Dean’s List.
          </p>
        </div>
        <div className='service'>
          <h3>Certifications</h3>
          <p>
            Acquired more than 10 certifications in Front-End and Backend
            Development from self-taught platforms such as Scrimba, Udemy, and
            Codecademy.
          </p>
        </div>
        <div className='service'>
          <h3>Continuous Learning</h3>
          <p>
            Improve my skillset by consistently solving DSA challenges on
            LeetCode and refining my front-end expertise through hands-on
            projects on Frontend Mentor.
          </p>
        </div>
      </div>
      <a
        href='/#work'
        className='btn'>
        My Work
      </a>
    </section>
  )
}
