import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiCopy, FiCheck } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  const { contact } = portfolio
  const [copied, setCopied] = useState(false)

  const linkedinUrl = contact.linkedin.startsWith('http')
    ? contact.linkedin
    : `https://${contact.linkedin}`

  const githubUrl = contact.github.startsWith('http')
    ? contact.github
    : `https://${contact.github}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-heading">
            <span className="cmd">Connect</span>
          </h2>
          <p className="section-subtitle">Let's build something interesting together.</p>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="contact-intro">{contact.intro}</p>

          <div className="email-row">
            <div className="email-chip">
              <FiMail size={20} />
              <span className="email-text">{contact.email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className={`copy-btn ${copied ? 'copied' : ''}`}
              aria-label="Copy email"
              title={copied ? 'Copied!' : 'Copy email'}
            >
              {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
            </button>
          </div>

          <div className="contact-actions">
            <a href={`mailto:${contact.email}`} className="btn-cta btn-cta-primary">
              <FiMail size={18} />
              Email
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta btn-cta-secondary"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta btn-cta-secondary"
            >
              <FiGithub size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
