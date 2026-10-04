import { portfolio } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, tagline } = portfolio

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{name}</h3>
            <span className="footer-divider" aria-hidden="true" />
            <p>{tagline}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {name}. All rights reserved.</p>
          <p>Designed & Built with <span className="heart">❤️</span> using React, TypeScript & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
