import { motion } from 'framer-motion'
import { FiCalendar, FiAward } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Education.css'

export default function Education() {
  const { education } = portfolio

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

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="education-card card">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
