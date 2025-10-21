import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/webradio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Rádio Web IFC Videira',
        short_name: 'Rádio IFC',
        description: 'Rádio Web educativa e cultural do Instituto Federal Catarinense - Campus Videira.',
        theme_color: '#2e8b57',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        start_url: '/webradio/',
        scope: '/webradio/',
        icons: [
          {
            src: "icons/icon-192.webp",
            sizes: "192x192",
            type: "image/webp",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-512.webp",
            sizes: "512x512",
            type: "image/webp",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/eduplay\.rnp\.br\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'eduplay-stream',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /\.(?:js|css|html|png|jpg|svg)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-resources',
            },
          },
        ],
      },
    }),
  ],
})
