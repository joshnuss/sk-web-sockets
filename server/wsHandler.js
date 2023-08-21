import { Server } from 'socket.io'

export function handler(server) {
  const io = new Server(server)

  io.on('connection', (socket) => {
    socket.emit('hello', 'Hello World!')
  })
}
