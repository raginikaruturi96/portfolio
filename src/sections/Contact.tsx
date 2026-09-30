import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiCopy, FiCheck, FiArrowUpRight } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  const { contact } = portfolio
  const [copied, setCopied] = useState(false)

  const linkedinUrl = contact.linkedin.startsWith('http')
    ? contact.linkedin
    : `https://${contact.linkedin}`

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
            <span className="prompt">$</span>
            <span className="cmd">say_hello</span>
            <span className="wave">👋</span>
          </h2>
          <p className="section-subtitle">Let's build something interesting together.</p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="contact-card-inner">
            <div className="glow glow-a" aria-hidden="true" />
            <div className="glow glow-b" aria-hidden="true" />

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
                Send a message
                <FiArrowUpRight size={16} className="arrow" />
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-secondary"
              >
                <FiLinkedin size={18} />
                Connect on LinkedIn
                <FiArrowUpRight size={16} className="arrow" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
