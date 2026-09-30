import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiLayers } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import {
  SiC, SiPython, SiHaskell, SiRust, SiElixir, SiDart, SiJavascript, SiTypescript,
  SiFlutter, SiHtml5, SiCss3, SiPhoenixframework, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiGitlab, SiGooglecolab, SiPostman, SiLinux, SiGoogle,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { portfolio } from '../data/portfolio'
import type { SkillIcon } from '../types/portfolio'
import './Skills.css'

const CATEGORY_ICONS: Record<SkillIcon, IconType> = {
  FiCode, FiDatabase, FiTool, FiLayers,
}

interface SkillMeta { icon: IconType; color: string }

const SKILL_META: Record<string, SkillMeta> = {
  C:            { icon: SiC,             color: '#A8B9CC' },
  Python:       { icon: SiPython,        color: '#3776AB' },
  Java:         { icon: FaJava,          color: '#F89820' },
  Haskell:      { icon: SiHaskell,       color: '#8F4E8B' },
  Rust:         { icon: SiRust,          color: '#DEA584' },
  Elixir:       { icon: SiElixir,        color: '#B072B0' },
  Dart:         { icon: SiDart,          color: '#0175C2' },
  JavaScript:   { icon: SiJavascript,    color: '#F7DF1E' },
  TypeScript:   { icon: SiTypescript,    color: '#3178C6' },

  HTML:         { icon: SiHtml5,          color: '#E34F26' },
  CSS:          { icon: SiCss3,           color: '#1572B6' },
  Flutter:      { icon: SiFlutter,        color: '#02569B' },
  Phoenix:      { icon: SiPhoenixframework, color: '#FD4F00' },
  'Node.js':    { icon: SiNodedotjs,       color: '#5FA04E' },

  MySQL:        { icon: SiMysql,          color: '#4479A1' },
  PostgreSQL:   { icon: SiPostgresql,     color: '#4169E1' },
  MongoDB:      { icon: SiMongodb,        color: '#47A248' },

  Git:          { icon: SiGit,            color: '#F05032' },
  GitHub:       { icon: SiGithub,         color: '#e8e8e8' },
  GitLab:       { icon: SiGitlab,         color: '#FC6D26' },
  'Google Colab': { icon: SiGooglecolab,  color: '#F9AB00' },
  Postman:      { icon: SiPostman,        color: '#FF6C37' },
  Bruno:        { icon: FiTool,           color: '#F59E0B' },
  Linux:        { icon: SiLinux,          color: '#FCC624' },
  Protobuf:     { icon: SiGoogle,         color: '#4285F4' },
}

export default function Skills() {
  const { categories } = portfolio.skills
  const [activeIndex, setActiveIndex] = useState(0)
  const active = categories[activeIndex]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">My toolbox — organised by category</p>
        </motion.div>

        <div className="skills-tabs" role="tablist">
          {categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.icon]
            const isActive = i === activeIndex
            return (
              <button
                key={cat.title}
                role="tab"
                aria-selected={isActive}
                className={`skills-tab ${isActive ? 'active' : ''} ${cat.color}`}
                onClick={() => setActiveIndex(i)}
              >
                <Icon size={16} />
                <span>{cat.title}</span>
                <span className="skills-tab-count">{cat.skills.length}</span>
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="skills-tab-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            className="skills-canvas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {active.skills.map((skill, i) => {
              const meta = SKILL_META[skill] ?? { icon: FiTool, color: 'var(--primary-light)' }
              const Icon = meta.icon
              return (
                <motion.div
                  key={skill}
                  className="skill-tile"
                  style={{ ['--tile-color' as string]: meta.color }}
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                >
                  <div className="skill-glow" aria-hidden="true" />
                  <Icon className="skill-icon" size={36} />
                  <span className="skill-name">{skill}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
