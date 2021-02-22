const hostname = window.location.hostname
const isDev = hostname.includes('beta.') || hostname.includes('dev')
const isProduction = (!isDev && hostname.includes('.soypro'))

const forceProd = false

export default () => (isProduction || forceProd ? 'prod' : isDev ? 'dev' : 'local')
