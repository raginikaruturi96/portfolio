import raw from './portfolio.md?raw'
import { parsePortfolio } from './portfolioParser'

export const portfolio = parsePortfolio(raw)
