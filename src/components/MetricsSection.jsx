import { metrics } from '../data/site.js'

export default function MetricsSection() {
  return (
    <section className="section metrics" id="metricas">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{metrics.eyebrow}</span>
          <h2>{metrics.title}</h2>
          <p className="lead">{metrics.description}</p>
        </div>

        <div className="grid grid-4">
          {metrics.items.map((item) => (
            <article className="card metric" key={item.id}>
              <p className="metric__label">{item.label}</p>
              <p className="metric__value num">
                {item.value}
                {item.unit && <span className="metric__unit">{item.unit}</span>}
              </p>
              <p className="metric__note">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="method">
          <div className="method__head">
            <span className="eyebrow">Criterio</span>
            <h3>{metrics.method.title}</h3>
          </div>
          <ol className="method__list">
            {metrics.method.points.map((point, index) => (
              <li key={point}>
                <span className="method__n num">{String(index + 1).padStart(2, '0')}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
