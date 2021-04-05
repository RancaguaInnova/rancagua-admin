import getEnv from './getEnv'

const urls = {
  //local: `http://${window.location.hostname}:3100`,
  local: `https://services.smartrancagua.com`,
  dev: `https://services.smartrancagua.com`,
  prod: 'https://services.smartrancagua.com'
}

const env = getEnv()

if (env !== 'local' && window.location.protocol !== 'https:') {
  window.location.protocol = 'https:'
}

export default urls[env]
