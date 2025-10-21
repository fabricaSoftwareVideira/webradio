import React from 'react'
import RadioPlayer from './components/RadioPlayer'
import History from './components/History'
import About from './components/About'
import Schedule from './components/Schedule'
import Team from './components/Team'
import SocialLinks from './components/SocialLinks'
import './index.css' // ajuste conforme seu arquivo de estilos

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>📻 Rádio Web IFC Videira</h1>
        <p>Ouça e acompanhe nossa programação diária</p>
      </header>

      <main>
        <RadioPlayer />

        {/* Social links logo após o player para evidenciar formas de acompanhar */}
        <SocialLinks />

        <History />

        <About />

        <Schedule />

        <Team />
      </main>

      <footer>
        <small>Fonte: eduplay.rnp.br — Desenvolvido com ❤️ por IFC</small>
      </footer>
    </div>
  )
}
