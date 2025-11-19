import { featuredEvents, learningCourses, trendingTopics } from '../data'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="card compact">
        <h3>LinkedIn News</h3>
        <ul className="sidebar__list">
          {trendingTopics.map((topic) => (
            <li key={topic.id}>
              <div>
                <strong>{topic.title}</strong>
                <span>{topic.audience}</span>
              </div>
              <span className="tag positive">{topic.change}</span>
            </li>
          ))}
        </ul>
        <button className="link">Show more</button>
      </section>

      <section className="card compact">
        <h3>Events you might like</h3>
        <ul className="sidebar__list">
          {featuredEvents.map((event) => (
            <li key={event.id}>
              <div>
                <strong>{event.title}</strong>
                <span>{event.time}</span>
              </div>
              <span>{event.attendees}</span>
            </li>
          ))}
        </ul>
        <button className="link">+ Create event</button>
      </section>

      <section className="card">
        <h3>Keep learning</h3>
        <ul className="sidebar__list is-column">
          {learningCourses.map((course) => (
            <li key={course.id}>
              <div>
                <strong>{course.title}</strong>
                <span>{course.author}</span>
              </div>
              <span>{course.duration}</span>
            </li>
          ))}
        </ul>
        <button className="btn secondary block">View all courses</button>
      </section>
    </aside>
  )
}

export default Sidebar

