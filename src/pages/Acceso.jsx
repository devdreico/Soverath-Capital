import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import { clearAccess, hasAccess } from '../lib/invite.js'
import { invite, links } from '../data/site.js'

export default function Acceso() {
  const navigate = useNavigate()
  const [unlocked, setUnlocked] = useState(() => hasAccess())
  const copy = invite.access

  useEffect(() => {
    if (!hasAccess()) {
      navigate('/', { replace: true, state: { openInvite: true } })
    }
  }, [navigate])

  if (!unlocked) return null

  const handleLogout = () => {
    clearAccess()
    setUnlocked(false)
    navigate('/', { replace: true })
  }

  return (
    <main className="access">
      <section className="access__hero">
        <div className="container access__hero-inner">
          <div className="access__mark">
            <Logo size={78} />
          </div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h1>{copy.title}</h1>
          <p className="lead">{copy.lead}</p>

          <div className="access__actions">
            <span className="badge badge--ok">{copy.badge}</span>
            <a className="btn btn--primary" href={links.soverath} target="_blank" rel="noopener noreferrer">
              {copy.helpCta} ↗
            </a>
            <Link className="btn btn--outline" to="/">
              {copy.backCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section access__body">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{copy.benefitsTitle}</span>
            <h2>Lo que se habilita con tu invitación</h2>
          </div>

          <div className="grid grid-2">
            {invite.benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <h3 className="card__title">{benefit.title}</h3>
                <p className="card__text">{benefit.text}</p>
              </article>
            ))}
          </div>

          <div className="access__cols">
            <div className="panel">
              <span className="eyebrow">{copy.processTitle}</span>
              <ol className="process">
                {invite.steps.map((step) => (
                  <li key={step.n}>
                    <span className="process__n num">{step.n}</span>
                    <div>
                      <p className="process__title">{step.title}</p>
                      <p className="process__text">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="panel">
              <span className="eyebrow">{copy.requirementsTitle}</span>
              <ul className="checklist">
                {invite.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="panel__help">
                <p className="panel__help-title">{copy.helpTitle}</p>
                <p className="panel__help-text">{copy.helpText}</p>
                <a className="link-inline" href={links.soverath} target="_blank" rel="noopener noreferrer">
                  {links.soverathLabel} ↗
                </a>
              </div>
            </div>
          </div>

          <div className="access__logout">
            <p className="muted">{copy.logoutNote}</p>
            <button className="btn btn--outline btn--sm" type="button" onClick={handleLogout}>
              {copy.logoutCta}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
