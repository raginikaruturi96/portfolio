export interface CtaLink { label: string; href: string }

export interface HeroSnippet {
  filename: string
  name: string
  role: string
  company: string
  languages: string[]
  loves: string
  comments: string[]
}

export interface Hero {
  greeting: string
  bio: string
  ctaPrimary: CtaLink
  ctaSecondary: CtaLink
  available: string
  snippet: HeroSnippet
}

export interface Stat { label: string; value: string }

export interface ExperienceRole {
  title: string
  period: string
  current?: boolean
  description: string[]
}

export interface Experience {
  company: string
  website: string
  location: string
  roles: ExperienceRole[]
  technologies: string[]
}

export interface FeaturedProject {
  title: string
  description: string[]
  technologies: string[]
  features: string[]
  github: string
  demo: string
}

export type SkillIcon = 'FiCode' | 'FiDatabase' | 'FiTool' | 'FiLayers'
export interface SkillCategory {
  title: string
  icon: SkillIcon
  color: string
  skills: string[]
}

export interface Education {
  degree: string
  board?: string
  school: string
  period?: string
  score: string
  description?: string[]
}

export interface Achievement {
  title: string
  icon: string
  details: string[]
}

export interface Contact {
  intro: string
  email: string
  linkedin: string
  github: string
}

export interface PortfolioData {
  name: string
  tagline: string
  roles: string[]
  hero: Hero
  stats: Stat[]
  experience: Experience[]
  projects: { featured: FeaturedProject[] }
  skills: { categories: SkillCategory[] }
  education: Education[]
  achievements: Achievement[]
  contact: Contact
  aboutParagraphs: string[]
}
