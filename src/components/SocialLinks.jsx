import React from 'react'
import { FaInstagram, FaSpotify, FaBroadcastTower } from 'react-icons/fa'

export default function SocialLinks() {
    return (
        <nav className="social-links" aria-label="Redes sociais">
            <a
                href="https://www.instagram.com/radioweb.ifc.videira/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram da Rádio Web IFC Videira"
                className="social-link"
            >
                <FaInstagram className="social-icon" />
                <span className="sr-only"></span>
            </a>

            <a
                href="https://open.spotify.com/show/6FwPMXHZu5dgFykudk5mtR?si=d465cdf3c2a9450a"
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify da Rádio Web IFC Videira"
                className="social-link"
            >
                <FaSpotify className="social-icon" />
                <span className="sr-only"></span>
            </a>

            <a
                href="https://eduplay.rnp.br/app/canal/radiowebifcvideira"
                target="_blank"
                rel="noopener noreferrer"
                title="Canal no Eduplay"
                className="social-link"
            >
                <FaBroadcastTower className="social-icon" />
                <span className="sr-only"></span>
            </a>
        </nav>
    )
}
