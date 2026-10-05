import Logo from './Logo.jsx'
import { useGoToSection } from '../lib/nav.js'
import { footer, links, site } from '../data/site.js'

export default function Footer({ onOpenInvite }) {
  const goToSection = useGoToSection()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo size={54} />
            <div>
              <p className="footer__wordmark">
                {site.wordmark[0]} <span>{site.wordmark[1]}</span>
              </p>
              <p className="footer__tagline">{footer.tagline}</p>
            </div>
          </div>

          <div className="footer__cols">
            {footer.columns.map((col) => (
              <div key={col.title} className="footer__col">
                <p className="footer__col-title">{col.title}</p>
                <ul>
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          {item.label}
                        </a>
                      ) : (
                        <button type="button" onClick={() => goToSection(item.target)}>
                          {item.label}
                        </button>
                      )}
                    </li>
                  ))}
                  {col.title === 'Acceso' && (
                    <li>
                      <button type="button" onClick={onOpenInvite}>
                        Introducir código
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="rule" />

        <div className="footer__bottom">
          <p className="footer__disclaimer">{footer.disclaimer}</p>
          <div className="footer__meta">
            <span>{footer.legal}</span>
            <a href={links.soverath} target="_blank" rel="noopener noreferrer">
              {links.soverathLabel} ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
