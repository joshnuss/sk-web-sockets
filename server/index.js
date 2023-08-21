import http from 'http'
import { handler as httpHandler } from '../build/handler.js'
import { handler as wsHandler } from './wsHandler.js'
import { env } from '../build/env.js'
import polka from 'polka'

const path = env('SOCKET_PATH', false)
const host = env('HOST', '0.0.0.0')
const port = env('PORT', !path && '3000')

const server = http.createServer()

const app = polka({ server }).use(httpHandler)

app.listen({ path, host, port }, () => {
  console.log(`Listening on ${path ? path : host + ':' + port}`)
})

wsHandler(server)
