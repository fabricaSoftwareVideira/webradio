import React from 'react'

export default function About() {
    const objectives = [
        {
            icon: '📚',
            text: 'Ampliar o acesso à informação e à cultura para a população de Videira e dos diversos campi do IFC, por meio de músicas, palestras, entrevistas e podcasts com acadêmicos, artistas e profissionais de diferentes áreas do conhecimento.',
        },
        {
            icon: '🏛️',
            text: 'Valorizar a história e a identidade cultural do Vale do Contestado, promovendo conteúdos que resgatem memórias, tradições e expressões locais.',
        },
        {
            icon: '📻',
            text: 'Oferecer uma programação complementar às rádios já existentes na região, como Rádio Popular FM 104.9, Tangará AM, 92FM, Rádio V FM, Massa FM Caçador, Rádio Vitória 1320 AM, Massa FM Canoinhas e Rádio Barriga Verde AM, além de eventos musicais promovidos por instituições públicas locais.',
        },
        {
            icon: '💭',
            text: 'Proporcionar momentos de lazer e reflexão, com conteúdos que estimulem o pensamento crítico, a diversidade musical e o diálogo com a realidade social.',
        },
        {
            icon: '⚖️',
            text: 'Promover valores éticos e morais, fundamentais para o bem-estar coletivo e o desenvolvimento humano, por meio de uma curadoria consciente e educativa.',
        },
        {
            icon: '🎭',
            text: 'Incentivar a produção de programas culturais relacionados à comunidade local, com participação ativa de estudantes, servidores e moradores da região.',
        },
    ]

    return (
        <section className="objectives">
            <h2>🎯 Objetivos da Rádio Web IFC Videira</h2>
            <p className="intro">
                A Rádio Web IFC Videira é um projeto de extensão que tem como missão
                fortalecer o vínculo entre o Instituto Federal Catarinense e a comunidade regional por meio de uma programação educativa, cultural e musical.
            </p>

            <ul className="objective-list">
                {objectives.map((obj, index) => (
                    <li key={index}>
                        <span className="emoji">{obj.icon}</span>
                        <p>{obj.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
