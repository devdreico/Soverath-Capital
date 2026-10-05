import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { grantAccess, validateInviteCode } from '../lib/invite.js'
import { invite, links, site } from '../data/site.js'

export default function InviteModal({ open, onClose }) {
  const [code, setCode] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success
  const [loading, setLoading] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const copy = invite.modal

  useEffect(() => {
    if (!open) return undefined
    setCode('')
    setStatus('idle')
    setLoading(false)
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 60)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    if (loading) return

    if (validateInviteCode(code)) {
      grantAccess(code)
      setStatus('success')
      setLoading(true)
      window.setTimeout(() => {
        onClose()
        navigate('/acceso')
      }, 550)
      return
    }
    setStatus('error')
  }

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="invite-title" onMouseDown={onClose}>
      <div className="modal__panel" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal__close" type="button" aria-label="Cerrar" onClick={onClose}>
          ✕
        </button>

        <div className="modal__head">
          <Logo size={44} />
          <p className="eyebrow">{site.name}</p>
          <h3 id="invite-title">{copy.title}</h3>
          <p className="modal__subtitle">{copy.subtitle}</p>
        </div>

        <form className="modal__form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="invite-code">{copy.label}</label>
            <input
              id="invite-code"
              ref={inputRef}
              type="text"
              autoComplete="off"
              spellCheck="false"
              value={code}
              placeholder={copy.placeholder}
              onChange={(event) => {
                setCode(event.target.value)
                if (status === 'error') setStatus('idle')
              }}
              aria-invalid={status === 'error'}
            />
          </div>

          {status === 'error' && (
            <p className="form-error" role="alert">
              {copy.error}
            </p>
          )}
          {status === 'success' && (
            <p className="form-success" role="status">
              {copy.success}
            </p>
          )}

          <button className="btn btn--primary btn--block" type="submit" disabled={loading}>
            {copy.submit}
          </button>
        </form>

        <div className="modal__foot">
          <p className="modal__hint">{copy.hint}</p>
          <a className="link-inline" href={links.soverath} target="_blank" rel="noopener noreferrer">
            {invite.externalCta} ↗
          </a>
        </div>
      </div>
    </div>
  )
}
