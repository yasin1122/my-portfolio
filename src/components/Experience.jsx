export default function Experience() {
  return (
    <section className='my-experience' id='experience'>
      <h2 className='section__title section__title--experience'>Professional Experience</h2>
      <p className='section__subtitle section__subtitle--experience'>
        Software Engineer (Full Stack) at Truveta | Jun 2025 - May 2026
      </p>

      <div className='experience__container'>
        <div className='experience__highlight'>
          <h3>Truveta Notes Annotation Team</h3>
          <p className='experience__intro'>
            Contributed to internal labeling platform as part of the Notes Annotation team, helping clinical experts
            produce training data for the Truveta Language Model (TLM) with data from 30 US health systems.
          </p>
        </div>

        <div className='experience__grid'>
          <div className='experience__card'>
            <div className='card__icon'>🚀</div>
            <h4 className='card__title'>Testing Infrastructure Pioneer</h4>
            <p className='card__description'>
              <strong>First engineer at Truveta to put testing into CI.</strong> Built Playwright E2E suite from scratch with
              page objects, fixtures, interactive pnpm CLI. Drove full-stack code coverage to 80% using Istanbul
              across React, NestJS, and .NET layers. Mentored intern who replicated setup as their project.
            </p>
            <div className='card__tech'>
              <span className='tech__pill'>Playwright</span>
              <span className='tech__pill'>Istanbul</span>
              <span className='tech__pill'>Azure DevOps</span>
              <span className='tech__pill'>Jest</span>
            </div>
          </div>

          <div className='experience__card'>
            <div className='card__icon'>🔒</div>
            <h4 className='card__title'>Security & DevOps Owner</h4>
            <p className='card__description'>
              <strong>Sole owner of security for two teams (20 engineers).</strong> Resolved CVEs in @nestjs/*, axios, lodash.
              Led 15+ file Open Redirect SAST sweep. Regularly unblocked CI/CD pipelines within an hour.
              Carried monthly on-call rotation through PagerDuty/Jira migration.
            </p>
            <div className='card__tech'>
              <span className='tech__pill'>Snyk</span>
              <span className='tech__pill'>Wiz CLI</span>
              <span className='tech__pill'>RBAC</span>
              <span className='tech__pill'>PagerDuty</span>
            </div>
          </div>

          <div className='experience__card'>
            <div className='card__icon'>⚡</div>
            <h4 className='card__title'>Performance Optimization</h4>
            <p className='card__description'>
              <strong>Cut page load from 20-30 seconds to under 1 second.</strong> Owned V2 to V3 migration end-to-end,
              introduced pagination, eliminated redundant full-table count queries, implemented lazy-fetching
              for per-user favorites from Cosmos DB.
            </p>
            <div className='card__tech'>
              <span className='tech__pill'>PostgreSQL</span>
              <span className='tech__pill'>Cosmos DB</span>
              <span className='tech__pill'>.NET</span>
              <span className='tech__pill'>React</span>
            </div>
          </div>

          <div className='experience__card'>
            <div className='card__icon'>🏗️</div>
            <h4 className='card__title'>Full-Stack Feature Development</h4>
            <p className='card__description'>
              <strong>Designed reusable patterns adopted team-wide.</strong> Built end-to-end: search with deep-linkable
              results, server-side filters with HashSet-based permissions, team CRUD, persisted
              user settings. Drove RBAC migration across 3 repositories.
            </p>
            <div className='card__tech'>
              <span className='tech__pill'>TypeScript</span>
              <span className='tech__pill'>NestJS</span>
              <span className='tech__pill'>Redux Toolkit</span>
              <span className='tech__pill'>Material UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}