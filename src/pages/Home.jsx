import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import MetricsSection from '../components/MetricsSection.jsx'
import IncomeStreams from '../components/IncomeStreams.jsx'
import BudgetRanges from '../components/BudgetRanges.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
import InviteSection from '../components/InviteSection.jsx'
import { scrollToId } from '../lib/nav.js'

export default function Home({ onOpenInvite }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const state = location.state
    if (!state) return undefined

    if (state.openInvite) onOpenInvite()

    let timer
    if (state.section) {
      timer = window.setTimeout(() => scrollToId(state.section), 90)
    }

    navigate(location.pathname, { replace: true, state: null })
    return () => window.clearTimeout(timer)
  }, [location.state, location.pathname, navigate, onOpenInvite])

  return (
    <main>
      <Hero onOpenInvite={onOpenInvite} />
      <MetricsSection />
      <IncomeStreams />
      <BudgetRanges />
      <ProjectsSection />
      <InviteSection onOpenInvite={onOpenInvite} />
    </main>
  )
}
