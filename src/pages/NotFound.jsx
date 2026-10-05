import { Link } from 'react-router-dom'
import { useGoToSection } from '../lib/nav.js'

export default function NotFound({ onOpenInvite }) {
  const goToSection = useGoToSection()

  return (
    <main className="notfound">
      <div className="container notfound__inner">
        <span className="eyebrow">404</span>
        <h1>Página no encontrada</h1>
        <p className="lead">La dirección solicitada no existe dentro de Soverath Capital.</p>
        <div className="notfound__actions">
          <Link className="btn btn--primary" to="/">
            Volver al inicio
          </Link>
          <button className="btn btn--outline" type="button" onClick={onOpenInvite}>
            Acceso por invitación
          </button>
          <button className="link-inline" type="button" onClick={() => goToSection('metricas')}>
            Ver métricas
          </button>
        </div>
      </div>
    </main>
  )
}
