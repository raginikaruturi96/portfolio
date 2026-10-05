import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { portfolio } from '../data/portfolio'
import lightModeDuck from '../assets/images/lightModeDuck.jpg'
import darkModeDuck from '../assets/images/darkModeDuck.jpg'
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
          className="hero-image-wrap"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        >
          <img className="hero-image hero-image-light" src={lightModeDuck} alt="A developer duck wearing headphones and coding" />
          <img className="hero-image hero-image-dark" src={darkModeDuck} alt="A developer duck wearing headphones and coding" />
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
