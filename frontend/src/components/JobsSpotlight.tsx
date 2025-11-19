import { FiBookmark, FiExternalLink } from 'react-icons/fi'
import { featuredJobs } from '../data'

const JobsSpotlight = () => {
  return (
    <section className="card jobs">
      <div className="card__header">
        <div>
          <p className="eyebrow">Jobs for you</p>
          <h2>Spotlight roles based on your skills</h2>
        </div>
        <button className="btn ghost">
          <FiExternalLink />
          See all jobs
        </button>
      </div>
      <div className="jobs__list">
        {featuredJobs.map((job) => (
          <article key={job.id}>
            <div className="jobs__title">
              <strong>{job.role}</strong>
              <button className="icon-button">
                <FiBookmark />
              </button>
            </div>
            <p>{job.company}</p>
            <span>{job.location}</span>
            <div className="jobs__meta">
              <span>{job.type}</span>
              <span>{job.applicants} applicants</span>
            </div>
            <button className="btn secondary block">Apply now</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default JobsSpotlight

