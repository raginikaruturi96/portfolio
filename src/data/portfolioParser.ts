import { load as loadYaml } from 'js-yaml'
import type { PortfolioData } from '../types/portfolio'

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/

export function parsePortfolio(raw: string): PortfolioData {
  const match = raw.match(FRONTMATTER)
  if (!match) throw new Error('portfolio.md: missing frontmatter')

  const data = loadYaml(match[1]) as Omit<PortfolioData, 'aboutParagraphs'>
  const aboutSection = match[2].split(/^##\s+About\s*$/m)[1] ?? ''
  const aboutParagraphs = aboutSection
    .split(/\r?\n\s*\r?\n/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean)

  return { ...data, aboutParagraphs }
}