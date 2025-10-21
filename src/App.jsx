import React from 'react'
import RadioPlayer from './components/RadioPlayer'
import History from './components/History'
import About from './components/About'
import Schedule from './components/Schedule'
import Team from './components/Team'
import SocialLinks from './components/SocialLinks'
import InstallButton from './components/InstallButton'
import Footer from './components/Footer'
import './index.css' // ajuste conforme seu arquivo de estilos

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>📻 Rádio Web IFC Videira</h1>
        <p>Ouça e acompanhe nossa programação diária</p>
        <InstallButton />  {/* Botão de instalação */}
      </header>

      <main>
        <RadioPlayer id="radio-player" />
        <History id="history" />
        <About id="objectives" />
        <Schedule id="schedule" />
        <Team id="team" />
        {/* <SocialLinks /> */}
      </main>

      <Footer />

    </div>
  )
}
