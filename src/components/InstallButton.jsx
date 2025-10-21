import React, { useState, useEffect } from 'react'

export default function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState(null)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault()
            setDeferredPrompt(e)
            setShowButton(true)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstall = async () => {
        if (!deferredPrompt) return

        deferredPrompt.prompt()
        const choiceResult = await deferredPrompt.userChoice

        if (choiceResult.outcome === 'accepted') {
            console.log('Usuário aceitou a instalação')
        } else {
            console.log('Usuário rejeitou a instalação')
        }

        setDeferredPrompt(null)
        setShowButton(false)
    }

    if (!showButton) return null

    return (
        <button className="install-button" onClick={handleInstall}>
            📲 Instalar App
        </button>
    )
}
