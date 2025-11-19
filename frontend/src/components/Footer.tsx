const Footer = () => {
  const columns = [
    {
      title: 'General',
      links: ['About', 'Community Guidelines', 'Privacy & Terms', 'Sales Solutions'],
    },
    {
      title: 'Careers',
      links: ['Jobs', 'Developers', 'Learning', 'Marketing Solutions'],
    },
    {
      title: 'Directories',
      links: ['Members', 'Companies', 'Newsletters', 'Services'],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="navbar__logo">in</span>
        <p>LinkedIn Clone • Crafted with React + Vite</p>
      </div>
      <div className="footer__grid">
        {columns.map((column) => (
          <div key={column.title}>
            <strong>{column.title}</strong>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="footer__note">© {new Date().getFullYear()} LinkedIn Clone. For demo purposes only.</p>
    </footer>
  )
}

export default Footer

