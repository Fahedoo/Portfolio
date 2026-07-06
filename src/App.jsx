import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Accueil, Projets, A_Propos, Contact, MentionsLegales } from './pages'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/"; // pas de footer sur l'accueil

  return (
    <div className="App">
      <main className="AppMain">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/a_propos" element={<A_Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets/:slug" element={<Navigate to="/projets" replace />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}


