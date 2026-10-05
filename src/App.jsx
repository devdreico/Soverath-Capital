import { useCallback, useState } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import InviteModal from './components/InviteModal.jsx'
import Home from './pages/Home.jsx'
import Acceso from './pages/Acceso.jsx'
import NotFound from './pages/NotFound.jsx'

function Shell() {
  const location = useLocation()
  const [inviteOpen, setInviteOpen] = useState(false)

  const openInvite = useCallback(() => setInviteOpen(true), [])
  const closeInvite = useCallback(() => setInviteOpen(false), [])

  return (
    <div className="app">
      <Header onOpenInvite={openInvite} />
      <Routes location={location}>
        <Route path="/" element={<Home onOpenInvite={openInvite} />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="*" element={<NotFound onOpenInvite={openInvite} />} />
      </Routes>
      <Footer onOpenInvite={openInvite} />
      <InviteModal open={inviteOpen} onClose={closeInvite} />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}
