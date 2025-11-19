const stats = [
  { label: 'Profile views', value: '1,209', change: '+8%' },
  { label: 'Post impressions', value: '88,410', change: '+23%' },
  { label: 'Search appearances', value: '347', change: '+12%' },
]

const StatsStrip = () => {
  return (
    <section className="stats-strip">
      {stats.map((stat) => (
        <article key={stat.label}>
          <p>{stat.label}</p>
          <div className="stat-value">
            <strong>{stat.value}</strong>
            <span>{stat.change}</span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default StatsStrip

