import data from '@begin/data'

export async function get (req) {
  let pings = await data.get({ table: 'pings' })
  return {
    json: {
      pings
    }
  }
}
