import { useState, useRef, useEffect, KeyboardEvent, useMemo } from 'react'
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'
import './InteractiveTerminal.css'

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'system'
  content: string | string[]
}

function buildCommands(): Record<string, () => string | string[]> {
  const { name, hero, experience, projects, skills, education, achievements, contact } = portfolio
  const currentJob = experience.find(e => e.current) ?? experience[0]

  const skillsBlock: string[] = ['⚡ Tech Stack', '']
  for (const cat of skills.categories) {
    skillsBlock.push(`${cat.title.padEnd(11)}→  ${cat.skills.join(' · ')}`)
  }

  const experienceBlock: string[] = ['📋 Work Experience', '']
  experience.forEach((exp, i) => {
    experienceBlock.push(`${i + 1}. ${exp.title} @ ${exp.company}           ${exp.period}`)
    experienceBlock.push(`   ${exp.technologies.join(' · ')}`)
    if (i < experience.length - 1) experienceBlock.push('')
  })

  const projectsBlock: string[] = ['🚀 Projects', '']
  projects.featured.forEach((p, i) => {
    projectsBlock.push(`${i + 1}. ${p.title}`)
    projectsBlock.push(`   ${p.description}`)
    projectsBlock.push(`   Stack: ${p.technologies.join(' · ')}`)
    if (i < projects.featured.length - 1) projectsBlock.push('')
  })

  const educationBlock: string[] = ['🎓 Education', '']
  education.forEach((e, i) => {
    const period = e.period ? `  ${e.period}` : ''
    educationBlock.push(`${e.degree}${period}`)
    educationBlock.push(`${e.school}`)
    educationBlock.push(`${e.score}`)
    if (i < education.length - 1) educationBlock.push('')
  })

  const achievementsBlock: string[] = ['🏆 Achievements', '']
  achievements.forEach((a, i) => {
    achievementsBlock.push(`${a.icon} ${a.title}`)
    a.details.forEach(d => achievementsBlock.push(`   ${d}`))
    if (i < achievements.length - 1) achievementsBlock.push('')
  })

  const contactBlock: string[] = [
    '📬 Contact',
    '',
    `Email    →  ${contact.email}`,
    `LinkedIn →  ${contact.linkedin}`,
  ]

  return {
    help: () => [
      '┌─ Available Commands ──────────────────────────────┐',
      '│  name              → Full name                    │',
      '│  position          → Current job title            │',
      '│  company           → Current employer             │',
      '│  experience        → Work history                 │',
      '│  projects          → Side projects                │',
      '│  skills            → Tech stack                   │',
      '│  education         → Academic background          │',
      '│  contact           → Contact details              │',
      '│  achievements      → Awards & recognition         │',
      '│  clear             → Clear terminal               │',
      '└───────────────────────────────────────────────────┘',
    ],
    name: () => name,
    position: () => currentJob.title,
    'current position': () => currentJob.title,
    role: () => currentJob.title,
    company: () => currentJob.company,
    employer: () => currentJob.company,
    'current company': () => currentJob.company,
    'current employer': () => currentJob.company,
    experience: () => experienceBlock,
    projects: () => projectsBlock,
    skills: () => skillsBlock,
    education: () => educationBlock,
    contact: () => contactBlock,
    email: () => contact.email,
    linkedin: () => contact.linkedin,
    achievements: () => achievementsBlock,
    whoami: () => 'ragini@portfolio',
    about: () => [
      `${name} — ${portfolio.tagline}.`,
      `Currently at ${currentJob.company}.`,
      hero.bio,
    ],
  }
}

const BOOT_LINES: TerminalLine[] = [
  { type: 'system', content: '  ██████╗  ██╗  ██╗' },
  { type: 'system', content: '  ██╔══██╗ ██║ ██╔╝' },
  { type: 'system', content: '  ██████╔╝ █████╔╝ ' },
  { type: 'system', content: '  ██╔══██╗ ██╔═██╗ ' },
  { type: 'system', content: '  ██║  ██║ ██║  ██╗' },
  { type: 'system', content: '  ╚═╝  ╚═╝ ╚═╝  ╚═╝  ragini@portfolio' },
  { type: 'system', content: '' },
  { type: 'system', content: `  ${portfolio.tagline}` },
  { type: 'system', content: '' },
  { type: 'output', content: '  Kernel loaded .............. ✓' },
  { type: 'output', content: '  Skills indexed ............. ✓' },
  { type: 'output', content: '  Experience mounted ......... ✓' },
  { type: 'output', content: '  Projects compiled .......... ✓' },
  { type: 'system', content: '' },
  { type: 'system', content: '  Type "help" to explore. Use ↑↓ for history.' },
  { type: 'system', content: '' },
]

export default function InteractiveTerminal() {
  const COMMANDS = useMemo(() => buildCommands(), [])
  const [lines, setLines] = useState<TerminalLine[]>(BOOT_LINES)
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    const next: TerminalLine[] = [{ type: 'input', content: raw.trim() }]

    if (!cmd) {
      setLines(prev => [...prev, ...next])
      return
    }

    if (cmd === 'clear') {
      setLines(BOOT_LINES)
      return
    }

    const handler = COMMANDS[cmd]
    if (handler) {
      next.push({ type: 'output', content: handler() })
    } else {
      next.push({ type: 'error', content: `Command not found: "${cmd}". Type "help" for available commands.` })
    }
    next.push({ type: 'system', content: '' })

    setLines(prev => [...prev, ...next])
    setCmdHistory(prev => [raw.trim(), ...prev])
    setHistoryIdx(-1)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      run(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1)
      setHistoryIdx(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = historyIdx - 1
      if (next < 0) { setHistoryIdx(-1); setInput('') }
      else { setHistoryIdx(next); setInput(cmdHistory[next]) }
    }
  }

  return (
    <section id="terminal" className="terminal-section section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>$ ./ask_me.sh</h2>
          <p className="section-subtitle">Query my portfolio like a pro — type a command and hit Enter</p>
        </motion.div>

        <motion.div
          className="iterm-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onClick={() => inputRef.current?.focus()}
        >
          <div className="iterm-bar">
            <span className="iterm-dot iterm-red" />
            <span className="iterm-dot iterm-yellow" />
            <span className="iterm-dot iterm-green" />
            <span className="iterm-title">ragini@portfolio ~ %</span>
          </div>

          <div className="iterm-body" ref={bodyRef}>
            {lines.map((line, i) => (
              <div key={i} className={`iterm-line iterm-${line.type}`}>
                {line.type === 'input' && <span className="iterm-prompt">❯ </span>}
                {Array.isArray(line.content)
                  ? line.content.map((l, j) => <div key={j}>{l || '\u00A0'}</div>)
                  : <span>{line.content || '\u00A0'}</span>}
              </div>
            ))}
          </div>

          <div className="iterm-input-row">
            <span className="iterm-prompt">❯ </span>
            <input
              ref={inputRef}
              className="iterm-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              spellCheck={false}
              placeholder="type a command..."
              autoFocus
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
