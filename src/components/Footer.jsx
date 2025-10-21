import React from 'react'
import { FaInstagram, FaSpotify, FaBroadcastTower } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <div className="social-links-footer">
                <a
                    href="https://www.instagram.com/radioweb.ifc.videira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Rádio"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://open.spotify.com/show/6FwPMXHZu5dgFykudk5mtR?si=d465cdf3c2a9450a"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Spotify Rádio"
                >
                    <FaSpotify />
                </a>
                <a
                    href="https://eduplay.rnp.br/app/canal/radiowebifcvideira"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Canal Eduplay"
                >
                    <FaBroadcastTower />
                </a>
            </div>

            <p className="footer-text">&copy; Desenvolvido por Fábrica de Software - IFC Videira - 2025</p>
        </footer>
    )
}
