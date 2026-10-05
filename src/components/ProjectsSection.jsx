import { projects } from '../data/site.js'

export default function ProjectsSection() {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{projects.eyebrow}</span>
          <h2>{projects.title}</h2>
          <p className="lead">{projects.description}</p>
        </div>

        <div className="grid grid-2">
          {projects.items.map((project) => (
            <article className="project" key={project.id}>
              <div className="project__head">
                <div>
                  <p className="project__area">{project.area}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className={`project__status project__status--${slug(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <dl className="project__meta">
                <div>
                  <dt>Impacto</dt>
                  <dd>{project.impact}</dd>
                </div>
                <div>
                  <dt>Riesgo</dt>
                  <dd>{project.risk}</dd>
                </div>
                <div>
                  <dt>Ficha</dt>
                  <dd className="num">SC-{project.id.toUpperCase()}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function slug(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}
