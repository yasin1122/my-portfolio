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
                <strong>First engineer at Truveta to put testing into CI.</strong> Built Playwright E2E suite from scratch with
                page objects, fixtures, interactive pnpm CLI, and pipeline integration. Drove full-stack code coverage to 80%
                using Istanbul across React, NestJS, and .NET layers.
              </p>
            </div>

            <div className='achievement'>
              <h4>🔒 Security & DevOps Owner</h4>
              <p>
                <strong>Sole owner of security for two teams (20 engineers).</strong> Resolved CVEs in @nestjs/*, axios, lodash,
                uuid, protobufjs. Led 15+ file Open Redirect SAST sweep. Regularly unblocked CI/CD pipelines within an hour.
                Carried monthly on-call rotation through PagerDuty/Jira migration.
              </p>
            </div>

            <div className='achievement'>
              <h4>⚡ Performance Optimization</h4>
              <p>
                <strong>Cut page load from 20-30 seconds to under 1 second.</strong> Owned V2 to V3 migration end-to-end,
                introduced pagination, eliminated redundant full-table count queries, and implemented lazy-fetching
                for per-user favorites from Cosmos DB.
              </p>
            </div>

            <div className='achievement'>
              <h4>🏗️ Full-Stack Feature Development</h4>
              <p>
                <strong>Designed reusable patterns adopted team-wide.</strong> Built end-to-end features: search with deep-linkable
                results, server-side filters with HashSet-based permission intersection, team management CRUD, persisted
                user settings. Drove RBAC migration across three repositories.
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