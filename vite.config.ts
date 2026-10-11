import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import StaticPortfolio from './src/StaticPortfolio'
import { parsePortfolio } from './src/data/portfolioParser'

export default defineConfig(({ command }) => ({
  plugins: [react(), {
    name: 'static-portfolio-html',
    configureServer(server) {
      server.middlewares.use('/assets/RagniKaruturiResume.pdf', (_request, response) => {
        response.setHeader('Content-Type', 'application/pdf')
        response.end(readFileSync(new URL('./src/assets/RaginiKaruturiResume.pdf', import.meta.url)))
      })
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const data = parsePortfolio(readFileSync(new URL('./src/data/portfolio.md', import.meta.url), 'utf8'))
        const siteUrl = 'https://raginikaruturi.raginikaruturi.workers.dev/'
        const imageSrc = command === 'build' ? '/social-preview.webp' : '/src/assets/images/laptopDuck.webp'
        const content = renderToStaticMarkup(createElement(StaticPortfolio, { data, imageSrc }))
        if (!html.includes('<div id="root"></div>')) throw new Error('Missing empty root placeholder for static portfolio generation')
        const currentCompany = data.experience.find(company => company.roles.some(role => role.current))
        const currentRole = currentCompany?.roles.find(role => role.current)
        const personId = `${siteUrl}#person`
        const projectNodes = data.projects.featured.map((project, index) => ({
          '@type': 'SoftwareSourceCode',
          '@id': `${siteUrl}#project-${index + 1}`,
          name: project.title,
          description: project.description.join(' '),
          programmingLanguage: project.technologies.filter(technology =>
            data.skills.categories.find(category => category.title === 'Languages')?.skills.includes(technology)),
          keywords: project.technologies.join(', '),
          url: `${siteUrl}#projects`,
          creator: { '@id': personId },
        }))
        const structuredData = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${siteUrl}#website`,
              url: siteUrl,
              name: `${data.name} | Software Engineer Portfolio`,
              description: data.hero.summary,
              inLanguage: 'en',
              publisher: { '@id': personId },
            },
            {
              '@type': 'ProfilePage',
              '@id': `${siteUrl}#profile`,
              url: siteUrl,
              name: `${data.name} | Software Engineer Portfolio`,
              description: data.hero.summary,
              inLanguage: 'en',
              isPartOf: { '@id': `${siteUrl}#website` },
              mainEntity: { '@id': personId },
              hasPart: projectNodes.map(project => ({ '@id': project['@id'] })),
            },
            {
              '@type': 'Person',
              '@id': personId,
              name: data.name,
              url: siteUrl,
              image: `${siteUrl}social-preview.webp`,
              description: data.hero.summary,
              jobTitle: currentRole?.title,
              worksFor: currentCompany ? {
                '@type': 'Organization', name: currentCompany.company, url: currentCompany.website,
              } : undefined,
              email: `mailto:${data.contact.email}`,
              sameAs: [...new Set([
                data.contact.linkedin, data.contact.github,
                ...data.projects.featured.flatMap(project => project.gitlab ? [project.gitlab] : []),
              ].map(url => new URL(url.startsWith('https://') ? url : `https://${url}`).href))],
              knowsAbout: [...new Set([
                ...data.skills.categories.flatMap(category => category.skills),
                ...data.experience.flatMap(company => company.technologies),
              ])],
              alumniOf: data.education.map(qualification => ({
                '@type': 'CollegeOrUniversity', name: qualification.school,
              })),
              hasCredential: data.education.map(qualification => ({
                '@type': 'EducationalOccupationalCredential',
                name: qualification.degree,
                description: qualification.score,
                recognizedBy: { '@type': 'CollegeOrUniversity', name: qualification.school },
              })),
              award: data.achievements.map(achievement => `${achievement.title}: ${achievement.details[0]}`),
            },
            ...projectNodes,
          ],
        }
        return {
          html: html.replace('<div id="root"></div>', `<div id="root">${content}</div>`),
          tags: [{
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
            injectTo: 'head',
          }],
        }
      },
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'social-preview.webp',
        source: readFileSync(new URL('./src/assets/images/laptopDuck.webp', import.meta.url)),
      })
      this.emitFile({
        type: 'asset',
        fileName: 'assets/RagniKaruturiResume.pdf',
        source: readFileSync(new URL('./src/assets/RaginiKaruturiResume.pdf', import.meta.url)),
      })
    },
  }],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
}))
