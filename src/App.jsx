import { Routes, Route, useLocation } from 'react-router-dom'
import { Accueil, Projets, A_Propos, Contact, ProjetDetail, MentionsLegales } from './pages'
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
          <Route path="/projets/:slug" element={<ProjetDetail />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
}


