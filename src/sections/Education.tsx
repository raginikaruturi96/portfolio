import { motion } from 'framer-motion'
import { FiCalendar, FiAward } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Education.css'

// Renders "**bold**" segments in a description bullet as <strong>
function renderWithBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  )
}

export default function Education() {
  const [edu] = portfolio.education

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <p className="section-subtitle">My academic journey</p>
        </motion.div>

        <motion.div
          className="education-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="education-summary">
            <div className="edu-header">
              <h3>{edu.degree}</h3>
              <span className="edu-score">
                <FiAward size={16} />
                {edu.score}
              </span>
            </div>

            {edu.board && <p className="edu-board">{edu.board}</p>}
            <p className="edu-school">{edu.school}</p>

            {edu.period && (
              <div className="edu-meta">
                <FiCalendar size={16} />
                <span>{edu.period}</span>
              </div>
            )}
          </div>

          {edu.description && (
            <ul className="edu-description">
              {edu.description.map((point, i) => (
                <li key={i}>{renderWithBold(point)}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  )
}
