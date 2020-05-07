import url from '../provider/url'

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin'
import { buildFullAccessFor } from 'ra-auth-acl'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params
    let email = username
    const request = new Request(url + '/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    request.headers.set('X-Origin', 'backoffice')

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(({ token }) => {
        localStorage.setItem('token', token)
        localStorage.setItem('role', 'admin')
      })
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token')
    return Promise.resolve()
  }
  if (type === AUTH_ERROR) {
    const status = params.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('token')
      return Promise.reject()
    }
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role')
    return Promise.resolve(permissions[role])
  }
  return Promise.resolve()
}
const permissions = {
  admin: {
    ...buildFullAccessFor(['users', 'news', 'profile'])
  },
  user: {
    ...buildFullAccessFor(['news', 'profile'])
  }
}
