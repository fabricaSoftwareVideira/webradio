import React from 'react'

export default function RadioPlayer({ id }) {
    const EMBED_URL = 'https://eduplay.rnp.br/app/radio/embed/271132'

    return (
        <section className="radio-player" id={id}>
            <h2>🎙️ Ao vivo</h2>
            <div className="iframe-container">
                <iframe
                    title="Rádio IFC"
                    src={EMBED_URL}
                    width="100%"
                    height="320"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                    allow="autoplay; encrypted-media"
                    style={{
                        border: 'none',
                        borderRadius: '12px',
                    }}
                ></iframe>
            </div>
            <p className="note">Se o áudio não iniciar automaticamente, toque “Play”.</p>
        </section>
    )
}
