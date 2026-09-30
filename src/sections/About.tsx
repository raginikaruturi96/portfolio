import { useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import './About.css'

export default function About() {
  const { stats, aboutParagraphs } = portfolio
  const bubblesRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = bubblesRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--mx', x.toFixed(3))
    el.style.setProperty('--my', y.toFixed(3))
  }

  const resetMove = () => {
    const el = bubblesRef.current
    if (!el) return
    el.style.setProperty('--mx', '0')
    el.style.setProperty('--my', '0')
  }

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            className="about-bubbles"
            ref={bubblesRef}
            onMouseMove={handleMove}
            onMouseLeave={resetMove}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bubble-field" aria-hidden="true">
              {Array.from({ length: 32 }).map((_, i) => {
                const size = 10 + (i % 6) * 5
                const drift = (i % 7) - 3
                return (
                  <span
                    key={i}
                    className="deco-bubble"
                    style={{
                      left: `${(i * 11.3 + 3) % 96}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      animationDuration: `${9 + (i % 7)}s`,
                      animationDelay: `${(i * 0.55) % 6}s`,
                      ['--parallax' as string]: `${(i % 5) * 6 + 8}px`,
                      ['--drift' as string]: `${drift}`,
                    }}
                  />
                )
              })}
            </div>

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`about-bubble bubble-${index}`}
                initial={{ opacity: 0, scale: 0.4, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
              >
                <span className="bubble-shine" aria-hidden="true" />
                <span className="bubble-icon">{stat.value}</span>
                <span className="bubble-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
