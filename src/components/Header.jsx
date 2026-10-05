import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { hasAccess } from '../lib/invite.js'
import { useGoToSection } from '../lib/nav.js'
import { nav, site } from '../data/site.js'

export default function Header({ onOpenInvite }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const goToSection = useGoToSection()
  const unlocked = hasAccess()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const handleAccess = () => {
    setMenuOpen(false)
    if (unlocked) navigate('/acceso')
    else onOpenInvite()
  }

  const handleBrand = () => {
    setMenuOpen(false)
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate('/')
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <button className="brand" type="button" onClick={handleBrand} aria-label="Soverath Capital — inicio">
          <Logo size={34} />
          <span className="brand__text">
            <strong>{site.wordmark[0]}</strong>
            <span>{site.wordmark[1]}</span>
          </span>
        </button>

        <nav className="nav" aria-label="Principal">
          {nav.map((item) => (
            <button key={item.id} className="nav__link" type="button" onClick={() => goToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <button className="btn btn--primary btn--sm" type="button" onClick={handleAccess}>
            {unlocked ? 'Mi acceso' : 'Acceso por invitación'}
          </button>
          <button
            className="burger"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <div className="container mobile-nav__inner">
            {nav.map((item) => (
              <button
                key={item.id}
                className="mobile-nav__link"
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  goToSection(item.id)
                }}
              >
                {item.label}
              </button>
            ))}
            <button className="btn btn--primary btn--sm" type="button" onClick={handleAccess}>
              {unlocked ? 'Mi acceso' : 'Acceso por invitación'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
