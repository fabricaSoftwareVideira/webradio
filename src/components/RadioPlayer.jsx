import React from 'react'

export default function RadioPlayer() {
    const EMBED_URL = 'https://eduplay.rnp.br/app/radio/embed/271132'

    return (
        <section className="radio-player">
            <h2>🎙️ Ao vivo</h2>
            <div className="iframe-container">
                <iframe
                    title="Rádio IFC"
                    src={EMBED_URL}
                    width="100%"
                    height="300"
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
