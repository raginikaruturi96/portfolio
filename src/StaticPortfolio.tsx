import type { PortfolioData } from './types/portfolio'

export default function StaticPortfolio({ data, imageSrc }: { data: PortfolioData; imageSrc: string }) {
  const { name, hero, experience, projects, skills, contact } = data
  const currentCompany = experience.find(company => company.roles.some(role => role.current))
  const currentRole = currentCompany?.roles.find(role => role.current)
  const linkedin = contact.linkedin.startsWith('https://') ? contact.linkedin : `https://${contact.linkedin}`
  const github = contact.github.startsWith('https://') ? contact.github : `https://${contact.github}`

  return (
    <main className="static-portfolio container">
      <header id="hero" className="static-intro">
        <div>
          <p>{hero.available}</p>
          <h1>{name}</h1>
          <p>{currentRole?.title} at {currentCompany?.company}</p>
          <p>{hero.bio}</p>
          <nav aria-label="Portfolio sections">
            <a href={hero.ctaPrimary.href} target="_blank" rel="noopener noreferrer">{hero.ctaPrimary.label}</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <p><a href={`mailto:${contact.email}`}>{contact.email}</a> · <a href={linkedin}>LinkedIn</a></p>
        </div>
        <img src={imageSrc} alt="A developer duck wearing headphones and coding on a laptop" width={1254} height={1254} />
      </header>

      <section id="about">
        <h2>About {name}</h2>
        {data.aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section id="experience">
        <h2>Work Experience</h2>
        {experience.map(company => (
          <article key={company.company}>
            <h3><a href={company.website}>{company.company}</a></h3>
            <p>{company.location}</p>
            {company.roles.map(role => (
              <div key={role.title}>
                <h4>{role.title}</h4>
                <p>{role.period}</p>
                <ul>{role.description.map(point => <li key={point}>{point}</li>)}</ul>
              </div>
            ))}
            <p>{company.technologies.join(' · ')}</p>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        {projects.featured.map(project => (
          <article key={project.title}>
            <h3>{project.title}</h3>
            <ul>{project.description.map(point => <li key={point}>{point}</li>)}</ul>
            <h4>Key Features</h4>
            <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <p>{project.technologies.join(' · ')}</p>
            {project.gitlab && <a href={project.gitlab}>View {project.title} on GitLab</a>}
          </article>
        ))}
      </section>

      <section id="skills">
        <h2>Core Technologies</h2>
        {skills.categories.map(category => (
          <div key={category.title}><h3>{category.title}</h3><p>{category.skills.join(' · ')}</p></div>
        ))}
      </section>

      <section id="education">
        <h2>Education</h2>
        {data.education.map(qualification => (
          <article key={qualification.degree}>
            <h3>{qualification.degree}</h3>
            <p>{qualification.school} · {qualification.period} · {qualification.score}</p>
          </article>
        ))}
      </section>

      <section id="achievements">
        <h2>Achievements</h2>
        {data.achievements.map(achievement => (
          <article key={achievement.title}>
            <h3>{achievement.title}</h3>
            <ul>{achievement.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          </article>
        ))}
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>{contact.intro}</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><a href={linkedin}>LinkedIn</a> · <a href={github}>GitHub</a></p>
      </section>
    </main>
  )
}