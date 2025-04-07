// src/components/Services.jsx
export default function Services() {
  return (
    <section
      className='my-services'
      id='services'>
      <h2 className='section__title section__title--services'>Education</h2>
      <div className='services'>
        <div className='service'>
          <h3>Diploma</h3>
          <p>
            Earned my Bachelor of Science in Computer Science from the
            University at Albany (SUNY) with Cum Laude honors and made the
            Dean’s List.
          </p>
        </div>
        <div className='service'>
          <h3>Certifications</h3>
          <p>
            Earned over 10 certifications in Front-End and Backend Development
            from self-taught platforms such as Scrimba, Udemy, and Codecademy.
          </p>
        </div>
        <div className='service'>
          <h3>Practice Daily</h3>
          <p>
            By consistently solving DSA challenges on LeetCode and refining my
            front-end expertise through hands-on projects on Frontend Mentor.
          </p>
        </div>
      </div>
      <h2 className='section__title section__title--services'>
        Skills & Qualifications
      </h2>
      <div className='services'>
        <div className='service'>
          <h3>Front-End</h3>
          <p>
            HTML, CSS, JavaScript, Figma (UI/UX), Tailwind, React, TypeScript,
            Bootstrap, Bulma.
          </p>
        </div>
        <div className='service'>
          <h3>Backend</h3>
          <p>
            APIs, Express, Node, MongoDB, Next, SQL (MySQL, PostgreSQL), Python,
            C, Java.
          </p>
        </div>
        <div className='service'>
          <h3>Other</h3>
          <p>
            Git, GitHub, Bash/Shell, AI/ML (OpenAI, Claude), Docker, Wordpress,
            Agile, Linux.
          </p>
        </div>
      </div>
      <a
        target='_blank'
        href='/yasin_cakal_portfolio.pdf'
        download='Yasin_Cakal_Portfolio.pdf'
        className='btn'>
        Download My Portfolio
      </a>
    </section>
  )
}
