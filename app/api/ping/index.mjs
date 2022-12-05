import arc from '@architect/functions'

export async function post (req) {
  await arc.events.publish({
    name: 'ping',
    payload: { hello: Date.now() }
  })
  return { location: '/' }
}
