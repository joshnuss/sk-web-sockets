import { Server } from 'socket.io'

export let io

export function getServer() {
  return global.io
}

export function handler(server) {
  io = new Server(server)

  global.io = io

  io.on('connection', (socket) => {
    socket.join("josh")

    socket.emit('hello', 'Hello World!')
  })
}
