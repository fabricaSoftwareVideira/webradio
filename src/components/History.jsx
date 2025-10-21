import React from 'react'

export default function History({ id }) {
    const historyPoints = [
        {
            icon: '🌱',
            text: 'A Rádio Web IFC Videira nasceu como projeto registrado em 28 de novembro de 2023 e entrou em operação em 1º de março de 2024. O início contou com a dedicação da bolsista Helena Munaro Moreira e do voluntário Rafael Vieira de Almeida, que foram essenciais para a estruturação inicial.',
        },
        {
            icon: '🎙️',
            text: 'Ao longo de 2024, a equipe organizou pesquisas, planejamento e a montagem do estúdio no Auditório (Sala J03), com microfones profissionais e mesa de som. As transmissões são ininterruptas pelo Eduplay e os podcasts estão disponíveis também no Spotify.',
        },
        {
            icon: '🤝',
            text: 'O projeto recebeu apoio de Edwin Albert Muller, da gestão do campus (Manassés Ribeiro e Kelly Gomes) e da jornalista Juliana Carla Bauerle Motta. A Rádio é fruto de pesquisa, dedicação e inovação — e segue em crescimento oferecendo formação e visibilidade à comunidade.',
        },
    ]

    return (
        <section className="history" id={id}>
            <h2>📜 História da Rádio</h2>
            <ul className="history-list">
                {historyPoints.map((item, index) => (
                    <li key={index}>
                        <span className="emoji">{item.icon}</span>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
