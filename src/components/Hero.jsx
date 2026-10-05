import Logo from './Logo.jsx'
import { useGoToSection } from '../lib/nav.js'
import { links, hero } from '../data/site.js'

export default function Hero({ onOpenInvite }) {
  const goToSection = useGoToSection()

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="lead">{hero.description}</p>

          <div className="hero__cta">
            <button className="btn btn--primary" type="button" onClick={onOpenInvite}>
              {hero.primaryCta}
            </button>
            <button className="link-inline" type="button" onClick={() => goToSection('metricas')}>
              {hero.secondaryCta}
            </button>
            <a className="hero__external" href={links.soverath} target="_blank" rel="noopener noreferrer">
              {links.soverathLabel} ↗
            </a>
          </div>

          <ul className="hero__badges">
            {hero.badges.map((badge) => (
              <li key={badge} className="badge">
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero__panel" aria-label="Cifras de operación">
          <div className="hero__panel-mark" aria-hidden="true">
            <Logo size={132} className="hero__panel-logo" />
          </div>
          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd className="num">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="hero__panel-note">Sociedad privada · Bases de operación internas</p>
        </aside>
      </div>
    </section>
  )
}
