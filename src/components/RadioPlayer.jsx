import React, { useEffect, useRef } from 'react'

export default function RadioPlayer({ id }) {
    const EMBED_URL = 'https://eduplay.rnp.br/app/radio/embed/271132'
    const iframeRef = useRef(null)

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe) return

        // Cria um observer para monitorar mudanças de tamanho
        const resizeObserver = new ResizeObserver(() => {
            // Garante que o iframe nunca crie barras de rolagem
            iframe.style.overflow = 'hidden'
            iframe.style.width = '100%'
            iframe.style.height = '100%'
        })

        resizeObserver.observe(iframe)

        return () => resizeObserver.disconnect()
    }, [])

    return (
        <section className="radio-player" id={id}>
            <h2>🎙️ Ao vivo</h2>
            <div className="iframe-container">
                <iframe
                    ref={iframeRef}
                    title="Rádio IFC"
                    src={EMBED_URL}
                    allow="autoplay; encrypted-media"
                    scrolling="no"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
                    style={{
                        border: 'none',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                    }}
                ></iframe>
            </div>
            <p className="note">
                Se o áudio não iniciar automaticamente, toque “Play”.
            </p>
        </section>
    )
}
