import { FiBell, FiBriefcase, FiEdit3, FiGrid, FiHome, FiMessageCircle, FiSearch, FiUsers } from 'react-icons/fi'

const navItems = [
  { icon: FiHome, label: 'Home', active: true },
  { icon: FiUsers, label: 'My Network' },
  { icon: FiBriefcase, label: 'Jobs' },
  { icon: FiMessageCircle, label: 'Messaging' },
  { icon: FiBell, label: 'Notifications' },
]

const Navbar = () => {
  const quickActions = [
    { icon: FiUsers, label: 'My Network' },
    { icon: FiEdit3, label: 'Post' },
    { icon: FiBell, label: 'Notifications' },
    { icon: FiBriefcase, label: 'Jobs' },
  ]

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo">in</div>
        <div className="navbar__search">
          <FiSearch />
          <input type="search" placeholder="Search for people, jobs, and more" />
        </div>
      </div>

      <div className="navbar__actions">
        <nav className="navbar__menu">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button key={label} className={`navbar__item ${active ? 'is-active' : ''}`}>
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="navbar__quick">
          {quickActions.map(({ icon: Icon, label }) => (
            <button key={label} className="navbar__quick-item" aria-label={label}>
              <Icon />
              <span>{label}</span>
            </button>
          ))}
          <div className="navbar__divider" />
          <button className="navbar__item">
            <FiGrid />
            <span>Work</span>
          </button>
          <button className="navbar__cta">Try Premium</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

