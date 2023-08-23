import { getServer } from '$lib/wsHandler.server'

export const actions = {
  default: async ({ request }) => {
    const io = getServer()
    const form = await request.formData()
    const message = form.get('message')

    io.to('josh').emit('hello', message)
  }
}
