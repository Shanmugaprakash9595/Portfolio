import './header.css'

function Head() {
  const links = [
    { label: 'About', target: '#about' },
    { label: 'Skill', target: '#skill' },
    { label: 'Visionary', target: '#visionary' },
    { label: 'Projects', target: '#projects' },
    { label: 'Education', target: '#education' },
    { label: 'Contact', target: '#contact' }
  ]

  return (
    <header className="header">
      <nav className="nav">
        <a href="#about" className="brand">Shanmugaprakash</a>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.target}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Head
