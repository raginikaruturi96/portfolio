import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import { WeScholarIcon } from '../components/StatIcons'
import { CmiShortlistIcon } from '../components/AchievementIcons'
import './Achievements.css'

function renderAchievementIcon(title: string, fallback: string) {
  const norm = title.toLowerCase()
  if (norm.includes('we scholar') || norm.includes('scholar') || norm.includes('google')) {
    return <WeScholarIcon className="achievement-svg-icon" />
  }
  if (norm.includes('cmi') || norm.includes('entrance') || norm.includes('shortlist')) {
    return <CmiShortlistIcon className="achievement-svg-icon" />
  }
  return fallback
}

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
                <div className="achievement-icon">
                  {renderAchievementIcon(a.title, a.icon)}
                </div>
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
