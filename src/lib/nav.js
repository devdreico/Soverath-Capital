import { useLocation, useNavigate } from 'react-router-dom'

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

export function useGoToSection() {
  const navigate = useNavigate()
  const location = useLocation()

  return (id) => {
    if (location.pathname === '/') {
      scrollToId(id)
      return
    }
    navigate('/', { state: { section: id } })
  }
}
