import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { useTypewriter } from '../hooks/useTypewriter'
import { portfolio } from '../data/portfolio'
import laptopDuck from '../assets/images/laptopDuck.png'
import elements from '../assets/images/elements.png'
import './Hero.css'

const sceneElements = [
  { name: 'braces', crop: '150 75 550 460' },
  { name: 'code', crop: '850 100 570 450' },
  { name: 'binary', crop: '1150 605 335 300' },
  { name: 'cube-left', crop: '55 550 395 410' },
  { name: 'cube-right', crop: '495 620 300 310' },
  { name: 'cube-top', crop: '875 690 230 230' },
]

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
  const reduceMotion = useReducedMotion()
  const orbitGradient = useId()
  const platformId = useId()
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
          initial={reduceMotion ? false : { opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="hero-duck-scene">
            <svg className="hero-orbits" viewBox="0 0 520 520" aria-hidden="true">
              <defs>
                <linearGradient id={orbitGradient} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00d9ff" />
                  <stop offset="55%" stopColor="#2575ff" />
                  <stop offset="100%" stopColor="#d65cff" />
                </linearGradient>
              </defs>
              <g className="hero-orbit-dashes" fill="none" stroke="#2575ff" strokeWidth="1.5" strokeDasharray="5 5">
                <circle cx="260" cy="260" r="233" />
                <circle cx="260" cy="260" r="196" />
              </g>
              <g className="hero-orbit-trails" fill="none" stroke={`url(#${orbitGradient})`} strokeWidth="2.5">
                <circle cx="260" cy="260" r="215" strokeDasharray="340 95 170 746" />
                <ellipse cx="260" cy="282" rx="235" ry="59" transform="rotate(-12 260 282)" />
                <ellipse cx="260" cy="282" rx="200" ry="47" transform="rotate(12 260 282)" />
              </g>
              <g className="hero-orbit-particles" fill="#00d9ff">
                <circle cx="260" cy="45" r="3" />
                <circle cx="363" cy="70" r="3" />
                <circle cx="119" cy="96" r="4" />
                <circle cx="83" cy="225" r="3" />
                <circle cx="101" cy="345" r="2.5" />
                <circle cx="417" cy="353" r="3" />
                <circle cx="131" cy="447" r="3" />
                <circle cx="378" cy="425" r="2.5" />
              </g>
            </svg>
            <svg className="hero-platform" viewBox="0 0 400 150" aria-hidden="true">
              <defs>
                <linearGradient id={`${platformId}-rim`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#407cff" />
                  <stop offset="45%" stopColor="#5bdbff" />
                  <stop offset="100%" stopColor="#d2fbff" />
                </linearGradient>
                <radialGradient id={`${platformId}-light`}>
                  <stop offset="0%" stopColor="#e5fcff" stopOpacity="0.95" />
                  <stop offset="14%" stopColor="#78efff" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#00bfff" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#2575ff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={`${platformId}-flare`} gradientUnits="userSpaceOnUse" x1="100" y1="98" x2="300" y2="98">
                  <stop offset="0%" stopColor="#00d9ff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#e5fcff" />
                  <stop offset="100%" stopColor="#00d9ff" stopOpacity="0" />
                </linearGradient>
                <filter id={`${platformId}-bloom`} filterUnits="userSpaceOnUse" x="-100" y="-200" width="600" height="380">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="bloom" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="edge" />
                  <feMerge>
                    <feMergeNode in="bloom" />
                    <feMergeNode in="edge" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g className="hero-platform-glow" transform="translate(0 -20)">
                <ellipse cx="200" cy="97" rx="155" ry="42" fill={`url(#${platformId}-light)`} />
                <path d="M 100 98 H 300" stroke={`url(#${platformId}-flare)`} strokeWidth="2" filter={`url(#${platformId}-bloom)`} />
                <path d="M 200 78 V 112" stroke="#b9faff" strokeWidth="1" opacity="0.45" />
              </g>
              <g fill="none" stroke="#328fff" filter={`url(#${platformId}-bloom)`} transform="translate(0 -20)">
                <ellipse cx="200" cy="101" rx="92" ry="22" strokeWidth="2" opacity="0.45" />
                <ellipse cx="200" cy="94" rx="122" ry="26" strokeWidth="1.5" opacity="0.2" />
              </g>
              <g className="hero-platform-ripples" fill="none" stroke="#2575ff" strokeWidth="3" filter={`url(#${platformId}-bloom)`}>
                {[0, 1, 2].map((ringIndex) => (
                  <g key={ringIndex} className="hero-platform-ring" style={{ animationDelay: `${-(ringIndex * 5 / 3)}s` }}>
                    <ellipse cx="200" cy="90" rx="160" ry="10" />
                  </g>
                ))}
              </g>
              <g fill="none" filter={`url(#${platformId}-bloom)`}>
                <ellipse cx="200" cy="54" rx="176" ry="32" stroke={`url(#${platformId}-rim)`} strokeWidth="4" />
                <path d="M 24 54 A 176 32 0 0 0 376 54" stroke="#baf6ff" strokeWidth="4" />
              </g>
            </svg>
            <img
              className="hero-image"
              src={laptopDuck}
              alt="A developer duck wearing headphones and coding on a laptop"
              width={1254}
              height={1254}
              draggable={false}
            />
            <svg className="hero-orbit-front" viewBox="0 0 520 520" aria-hidden="true">
              <path d="M 29 310 C 35 364, 397 358, 489 257" fill="none" stroke={`url(#${orbitGradient})`} strokeWidth="3" />
            </svg>
            <div className="hero-scene-elements" aria-hidden="true">
              {sceneElements.map(({ name: elementName, crop }) => (
                <div key={elementName} className={`hero-scene-element hero-element-${elementName}`}>
                  <svg viewBox={crop}>
                    <image href={elements} width="1536" height="1024" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-hint"
        animate={{ y: reduceMotion ? 0 : [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
