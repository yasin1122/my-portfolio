export default function Experience() {
  return (
    <section className='my-experience' id='experience'>
      <h2 className='section__title section__title--experience'>Professional Experience</h2>
      <p className='section__subtitle section__subtitle--experience'>
        Software Engineer (Full Stack) at Truveta | Jun 2025 - May 2026
      </p>

      <div className='experience__container'>
        <div className='experience__content'>
          <div className='experience__highlight'>
            <h3>Key Achievements at Truveta</h3>
            <p className='experience__intro'>
              Built and maintained an internal labeling platform for clinical experts to produce training data
              for the Truveta Language Model (TLM), supporting data from 30 US health systems.
            </p>
          </div>

          <div className='experience__achievements'>
            <div className='achievement'>
              <h4>🚀 Testing Infrastructure Pioneer</h4>
              <p>
                First engineer at the company to implement testing in CI. Built Playwright E2E suite from scratch,
                including page objects, fixtures, and CI pipeline integration. Drove code coverage to 80%.
              </p>
            </div>

            <div className='achievement'>
              <h4>🔒 Security & DevOps Owner</h4>
              <p>
                Sole owner of security for two teams (20 engineers). Handled all Snyk alerts, CVE remediation,
                and SAST sweeps. Regularly unblocked CI/CD pipelines and carried monthly on-call rotation.
              </p>
            </div>

            <div className='achievement'>
              <h4>⚡ Performance Optimization</h4>
              <p>
                Cut project list page load from 20-30 seconds to under 1 second through V2 to V3 migration,
                introducing pagination and eliminating redundant queries.
              </p>
            </div>

            <div className='achievement'>
              <h4>🏗️ Full-Stack Feature Development</h4>
              <p>
                Designed and built features end-to-end: search with deep-linkable results, server-side filters,
                team management CRUD, and reusable paginated list patterns adopted team-wide.
              </p>
            </div>
          </div>

          <div className='experience__tech'>
            <h4>Technologies Used:</h4>
            <div className='tech__tags'>
              <span className='tech__tag'>TypeScript</span>
              <span className='tech__tag'>React</span>
              <span className='tech__tag'>Redux Toolkit</span>
              <span className='tech__tag'>.NET</span>
              <span className='tech__tag'>NestJS</span>
              <span className='tech__tag'>Cosmos DB</span>
              <span className='tech__tag'>Playwright</span>
              <span className='tech__tag'>Azure DevOps</span>
              <span className='tech__tag'>Docker</span>
              <span className='tech__tag'>pnpm monorepos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}