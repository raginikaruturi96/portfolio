import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  const { experience } = portfolio

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Work Experience</h2>
          <p className="section-subtitle">My journey in the tech industry</p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker" aria-hidden="true">
                <FiBriefcase />
              </div>

              <div className="experience-card">
                <div className="experience-top">
                  <div className="experience-title-block">
                    <h3>
                      <span className="company-name">{exp.company}</span>
                    </h3>
                    <div className="experience-meta">
                      <FiMapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  {exp.roles.some(r => r.current) && <span className="badge-current">Current</span>}
                </div>

                <div className="role-timeline">
                  {exp.roles.map((role, i) => (
                    <div className="role-item" key={i}>
                      <div className="role-top">
                        <h4>{role.title}</h4>
                        <span className="role-period">
                          <FiCalendar size={13} />
                          {role.period}
                        </span>
                      </div>
                      <ul className="experience-description">
                        {role.description.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
