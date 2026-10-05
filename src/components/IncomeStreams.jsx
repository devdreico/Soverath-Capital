import { incomeStreams } from '../data/site.js'

export default function IncomeStreams() {
  return (
    <section className="section streams" id="ingresos">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{incomeStreams.eyebrow}</span>
          <h2>{incomeStreams.title}</h2>
          <p className="lead">{incomeStreams.description}</p>
        </div>

        <div className="grid grid-3">
          {incomeStreams.items.map((item, index) => (
            <article className="card" key={item.id}>
              <p className="card__index num">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
              <ul className="tag-list">
                {item.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
