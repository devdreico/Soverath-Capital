import { invite, links } from '../data/site.js'

export default function InviteSection({ onOpenInvite }) {
  return (
    <section className="invite-band" id="acceso">
      <div className="container">
        <div className="invite-band__head">
          <div>
            <span className="eyebrow eyebrow--dark">{invite.eyebrow}</span>
            <h2>{invite.title}</h2>
            <p className="invite-band__lead">{invite.description}</p>
          </div>

          <div className="invite-band__cta">
            <button className="btn btn--on-dark" type="button" onClick={onOpenInvite}>
              {invite.cta}
            </button>
            <a className="btn btn--outline-dark" href={links.soverath} target="_blank" rel="noopener noreferrer">
              {invite.externalCta} ↗
            </a>
          </div>
        </div>

        <ol className="steps">
          {invite.steps.map((step) => (
            <li className="step" key={step.n}>
              <span className="step__n num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="invite-band__note">{invite.note}</p>
      </div>
    </section>
  )
}
