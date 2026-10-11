import { FiGithub, FiGitlab, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, tagline, contact } = portfolio
  const github = contact.github.startsWith('https://') ? contact.github : `https://${contact.github}`
  const linkedin = contact.linkedin.startsWith('https://') ? contact.linkedin : `https://${contact.linkedin}`
  const gitlab = portfolio.projects.featured.find(project => project.gitlab)?.gitlab

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{name}</h3>
            <span className="footer-divider" aria-hidden="true" />
            <p>{tagline}</p>
          </div>
          <nav className="social-links-footer" aria-label="Social links">
            <a className="social-link" href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><FiGithub aria-hidden="true" /></a>
            {gitlab && <a className="social-link" href={gitlab} target="_blank" rel="noopener noreferrer" aria-label="GitLab" title="GitLab"><FiGitlab aria-hidden="true" /></a>}
            <a className="social-link" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><FiLinkedin aria-hidden="true" /></a>
            <a className="social-link" href={`mailto:${contact.email}`} aria-label="Email" title="Email"><FiMail aria-hidden="true" /></a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {name}.</p>
          <p>Designed & Built with <span className="heart">❤️</span> using React, TypeScript</p>
        </div>
      </div>
    </footer>
  )
}
