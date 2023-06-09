import axios from 'axios'

const client = axios.create({
  baseURL: 'https://zphc.glitch.me',
})

async function validateCode(code) {
  return client.post(`/validate/${code}`)
}

export default {
  validateCode,
}
