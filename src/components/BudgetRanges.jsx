import { budgetRanges } from '../data/site.js'

export default function BudgetRanges() {
  const total = budgetRanges.total || 100

  return (
    <section className="section budget" id="presupuesto">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{budgetRanges.eyebrow}</span>
          <h2>{budgetRanges.title}</h2>
          <p className="lead">{budgetRanges.description}</p>
        </div>

        <div className="budget__list">
          {budgetRanges.ranges.map((range) => (
            <div className="budget__row" key={range.id}>
              <div className="budget__info">
                <p className="budget__name">{range.name}</p>
                <p className="budget__desc">{range.description}</p>
              </div>
              <div className="budget__track" aria-hidden="true">
                <span
                  className="budget__fill"
                  style={{ width: `${Math.min(100, (range.allocation / total) * 100)}%` }}
                />
              </div>
              <p className="budget__value num">{range.allocation}%</p>
            </div>
          ))}

          <div className="budget__row budget__row--total">
            <div className="budget__info">
              <p className="budget__name">Presupuesto total asignado</p>
              <p className="budget__desc">Suma de todos los rangos de acción.</p>
            </div>
            <div className="budget__track budget__track--total" aria-hidden="true">
              <span className="budget__fill" style={{ width: '100%' }} />
            </div>
            <p className="budget__value num">{total}%</p>
          </div>
        </div>

        <p className="budget__foot muted">
          Las asignaciones se revisan sólo cuando las métricas consolidadas lo justifican.
        </p>
      </div>
    </section>
  )
}
