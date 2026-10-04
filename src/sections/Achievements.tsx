import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import './Achievements.css'

export default function Achievements() {
  const { achievements } = portfolio

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Achievements</h2>
          <p className="section-subtitle">Recognition & milestones</p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((a, index) => (
            <motion.div
              key={index}
              className="achievement-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="achievement-header">
                <div className="achievement-icon">{a.icon}</div>
                <h3 className="achievement-title">{a.title}</h3>
              </div>
              <ul className="achievement-details">
                {a.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
