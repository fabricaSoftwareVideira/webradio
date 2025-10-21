import React from 'react'

export default function Team() {
    const teachers = [
        { name: 'Carlos Roberto da Silva', role: 'Coordenador', icon: '👨‍💼' },
        { name: 'Cláudio Bertotto', role: '', icon: '📚' },
        { name: 'Grazielle Vieira Garcia', role: '', icon: '📚' },
        { name: 'Marcos Roberto Mesquita', role: '', icon: '📚' },
        { name: 'Paulo da Costa Pereira Neto', role: '', icon: '📚' },
    ]

    const operators = [
        {
            name: 'Rafael Vieira de Almeida',
            role:
                'Operação — Garantir o funcionamento da rádio, incluindo transmissão, suporte técnico a podcasts e manutenção do servidor.',
            icon: '🔧',
        },
        {
            name: 'Vitor Engelberto Fuerst',
            role:
                'Operação — Garantir o funcionamento da rádio, incluindo transmissão, suporte técnico a podcasts e manutenção do servidor.',
            icon: '🔧',
        },
    ]

    const social = [
        {
            name: 'Nathascha Pocera',
            role:
                'Divulgação — Gerenciar redes sociais, criar conteúdos, publicar posts e stories, e ampliar o engajamento da comunidade.',
            icon: '📱',
        },
        {
            name: 'Naomy Fernandes',
            role:
                'Divulgação — Gerenciar redes sociais, criar conteúdos, publicar posts e stories, e ampliar o engajamento da comunidade.',
            icon: '📱',
        },
    ]

    const production = [
        {
            name: 'Guilherme Otávio dos Santos',
            role:
                'Produção — Produzir vídeos, podcasts e conteúdos multimídia que valorizem a rádio e atraiam o público.',
            icon: '🎬',
        },
        {
            name: 'Kevin Antonio Silveira',
            role:
                'Produção — Produzir vídeos, podcasts e conteúdos multimídia que valorizem a rádio e atraiam o público.',
            icon: '🎬',
        },
        {
            name: 'Luis Engelberto Fuerst',
            role:
                'Produção — Produzir vídeos, podcasts e conteúdos multimídia que valorizem a rádio e atraiam o público.',
            icon: '🎬',
        },
    ]

    const renderList = (title, icon, list) => (
        <div className="team-group">
            <h3>
                {icon} {title}
            </h3>
            <ul>
                {list.map((person, i) => (
                    <li key={i}>
                        <span className="emoji">{person.icon}</span>
                        <div className="info">
                            <strong>{person.name}</strong>
                            {person.role && <p>{person.role}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <section className="team">
            <h2>👥 Equipe e Colaboradores</h2>

            {renderList('Professores Colaboradores', '🎓', teachers)}
            {renderList('Operação', '🔧', operators)}
            {renderList('Divulgação', '📱', social)}
            {renderList('Produção', '🎬', production)}
        </section>
    )
}
