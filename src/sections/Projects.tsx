import { motion } from 'framer-motion'
import { FiGitlab } from 'react-icons/fi'
import { portfolio } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  const { featured } = portfolio.projects

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Projects</h2>
          <p className="section-subtitle">Showcasing my best work</p>
        </motion.div>

        <div className="featured-projects">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              className="project-card-featured card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.gitlab && (
                  <a
                    href={project.gitlab}
                    className="project-repo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitLab`}
                    title="GitLab"
                  >
                    <FiGitlab size={22} aria-hidden="true" />
                  </a>
                )}
              </div>

              <ul className="project-description">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
