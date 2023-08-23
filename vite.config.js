import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

const wsServer = {
  name: 'wsServer',
  async configureServer(server) {
    if (!server.httpServer) return

    const { handler } = await import('./src/lib/wsHandler.server.js')

    handler(server.httpServer)
  }
}

export default defineConfig({
  plugins: [sveltekit(), wsServer]
})
