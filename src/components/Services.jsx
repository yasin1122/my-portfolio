// src/components/Services.jsx
export default function Services() {
  return (
    <section
      className='my-services'
      id='services'>
      <h2 className='section__title section__title--services'>Education & Background</h2>
      <div className='services'>
        <div className='service'>
          <h3>Computer Science Degree</h3>
          <p>
            B.S. in Computer Science from University at Albany (SUNY)
            <strong> Cum Laude, Dean's List</strong> | Class of 2017
          </p>
        </div>
        <div className='service'>
          <h3>Professional Journey</h3>
          <p>
            From freelance developer (2017-2020) to Full-Stack Developer at Code of Code,
            now Software Engineer at Truveta building ML training platforms.
          </p>
        </div>
        <div className='service'>
          <h3>Continuous Learning</h3>
          <p>
            Stay current with latest technologies through hands-on projects,
            technical documentation, and active contribution to team knowledge sharing.
          </p>
        </div>
      </div>
      <h2 className='section__title section__title--services'>
        Skills & Qualifications
      </h2>
      <div className='services'>
        <div className='service'>
          <h3>Frontend</h3>
          <p>
            React, Redux Toolkit, Material UI, TanStack, Next.js, Tailwind,
            Figma, TypeScript, JavaScript, HTML/CSS
          </p>
        </div>
        <div className='service'>
          <h3>Backend & Data</h3>
          <p>
            .NET, NestJS, REST APIs, JSON Schema codegen, Cosmos DB, MongoDB,
            PostgreSQL, C#, Python, SQL
          </p>
        </div>
        <div className='service'>
          <h3>DevOps & Testing</h3>
          <p>
            Playwright (E2E testing), Jest, Azure DevOps, CI/CD pipelines (YAML),
            Docker, Git, pnpm monorepos, Snyk, Wiz CLI, Datadog, Observe
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
