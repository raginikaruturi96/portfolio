import { load as loadYaml } from 'js-yaml'
import raw from './portfolio.md?raw'
import type { PortfolioData } from '../types/portfolio'

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/

function parse(): PortfolioData {
  const match = raw.match(FRONTMATTER)
  if (!match) throw new Error('portfolio.md: missing frontmatter')

  const data = loadYaml(match[1]) as Omit<PortfolioData, 'aboutParagraphs'>
  const body = match[2]

  const aboutSection = body.split(/^##\s+About\s*$/m)[1] ?? ''
  const aboutParagraphs = aboutSection
    .split(/\r?\n\s*\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)

  return { ...data, aboutParagraphs }
}

export const portfolio: PortfolioData = parse()
