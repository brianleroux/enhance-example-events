import arc from '@architect/functions'
import data from '@begin/data'

export let handler = arc.events.subscribe(fn)

async function fn (event) {
  await data.set({ table: 'pings', ...event })
  console.log(event)
}
