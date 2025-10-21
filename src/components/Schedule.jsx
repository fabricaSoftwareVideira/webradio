import React from 'react'

export default function Schedule({ id }) {
    const shows = [
        { time: '00:00 – 02:00', title: 'Música Internacional Romântica' },
        { time: '02:00 – 04:00', title: 'Sertanejo Romântico' },
        { time: '04:00 – 06:00', title: 'Rock' },
        { time: '06:00 – 08:00', title: 'MPB' },
        { time: '08:00 – 10:00', title: 'Podcast / Rock Nacional' },
        { time: '10:00 – 11:00', title: 'Músicas Pop' },
        { time: '11:00 – 12:00', title: 'Samba' },
        { time: '12:00 – 13:00', title: 'Momento Homenagem / MPB' },
        { time: '13:00 – 14:00', title: 'Música Gaúcha' },
        { time: '14:00 – 15:00', title: 'Blues e Jazz' },
        { time: '15:00 – 16:00', title: 'Internacional Romântico' },
        { time: '16:00 – 17:00', title: 'Rock' },
        { time: '17:00 – 18:00', title: 'MPB' },
        { time: '18:00 – 19:00', title: 'Podcast / Rock Nacional' },
        { time: '19:00 – 20:00', title: 'Pop Nacional' },
        { time: '20:00 – 21:00', title: 'Música Gaúcha' },
        { time: '21:00 – 22:00', title: 'Sertanejo Modão' },
        { time: '22:00 – 23:00', title: 'Samba' },
        { time: '23:00 – 00:00', title: 'Momento Homenagem / MPB' },
    ]

    return (
        <section className="schedule" id={id}>
            <h2>🎵 Programação Diária</h2>
            <ul className="schedule-list">
                {shows.map((show, index) => (
                    <li key={index} className="schedule-item">
                        <span className="time">{show.time}</span>
                        <span className="title">{show.title}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
