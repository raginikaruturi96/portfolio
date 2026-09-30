import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { portfolio } from '../data/portfolio'
import './Hero.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const role = useTypewriter(portfolio.roles)
  const { name, hero } = portfolio
  const s = hero.snippet

  const langRows: string[][] = []
  for (let i = 0; i < s.languages.length; i += 3) langRows.push(s.languages.slice(i, i + 3))

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-container">
        <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">

          <motion.div variants={itemVariants} className="hero-available">
            <span className="available-dot" />
            {hero.available}
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="hero-hi">{hero.greeting}</p>
            <h1 className="hero-name glitch" data-text={name}>
              {name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-role">
            <span className="role-arrow">{'>'}</span>
            <span className="role-text">{role}</span>
            <span className="role-cursor">|</span>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-bio">
            {hero.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">{hero.ctaPrimary.label}</a>
            <a href={hero.ctaSecondary.href} className="btn btn-secondary">{hero.ctaSecondary.label}</a>
          </motion.div>

        </motion.div>

        <motion.div
          className="hero-terminal-wrap"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="terminal">
            <div className="terminal-bar">
              <span className="td td-red" />
              <span className="td td-yellow" />
              <span className="td td-green" />
              <span className="terminal-filename">{s.filename}</span>
            </div>
            <div className="terminal-code">
              <p><span className="kw">const</span> <span className="va">dev</span> = {'{'}</p>
              <p>&nbsp;&nbsp;<span className="ke">name</span>:&nbsp;<span className="st">"{s.name}"</span>,</p>
              <p>&nbsp;&nbsp;<span className="ke">role</span>:&nbsp;<span className="st">"{s.role}"</span>,</p>
              <p>&nbsp;&nbsp;<span className="ke">company</span>:&nbsp;<span className="st">"{s.company}"</span>,</p>
              <p>&nbsp;&nbsp;<span className="ke">languages</span>: [</p>
              {langRows.map((row, ri) => (
                <p key={ri}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {row.map((lang, li) => {
                    const isLast = ri === langRows.length - 1 && li === row.length - 1
                    return (
                      <span key={li}>
                        <span className="st">"{lang}"</span>{isLast ? '' : ', '}
                      </span>
                    )
                  })}
                </p>
              ))}
              <p>&nbsp;&nbsp;],</p>
              <p>&nbsp;&nbsp;<span className="ke">loves</span>:&nbsp;<span className="st">"{s.loves}"</span></p>
              <p>{'}'}</p>
              {s.comments.map((c, i) => (
                <p key={i} className="cm">{`// ${c}`}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
