import { Routes, Route } from 'react-router-dom'
import { Accueil, Projets, A_Propos, Contact, ProjetDetail } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/a_propos" element={<A_Propos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projets/:slug" element={<ProjetDetail />} />
    </Routes>
  )
}


