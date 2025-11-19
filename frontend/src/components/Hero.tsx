import { FiPlayCircle } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="eyebrow">Welcome to your community</p>
        <h1>Build relationships, share ideas, and find new opportunities.</h1>
        <p className="subtitle">
          Everything you love about LinkedIn—profiles, feed, jobs, messaging—reimagined as a polished single-page
          experience.
        </p>
        <div className="hero__actions">
          <button className="btn primary">Join now</button>
          <button className="btn secondary">Sign in</button>
          <button className="btn ghost">
            <FiPlayCircle />
            Watch demo
          </button>
        </div>
        <ul className="hero__highlights">
          <li>
            <strong>950M+</strong>
            <span>global professionals</span>
          </li>
          <li>
            <strong>63M+</strong>
            <span>companies share updates</span>
          </li>
          <li>
            <strong>130K+</strong>
            <span>learning courses</span>
          </li>
        </ul>
      </div>
      <div className="hero__media">
        <div className="hero__card">
          <p className="hero__card-label">Opportunity graph</p>
          <h3>See how your skills match live roles.</h3>
          <div className="hero__graph">
            {[
              { label: 'Strategy', score: 92 },
              { label: 'Leadership', score: 84 },
              { label: 'Storytelling', score: 76 },
              { label: 'AI', score: 68 },
            ].map((skill) => (
              <label key={skill.label}>
                <span>{skill.label}</span>
                <div className="hero__progress">
                  <span style={{ width: `${skill.score}%` }} />
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="hero__media-glow" />
      </div>
    </section>
  )
}

export default Hero

