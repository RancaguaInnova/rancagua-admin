import url from "../urlprovider"

import {
  AUTH_CHECK,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from "react-admin"
import { setST, getST } from "../provider/Storage"
export default async (type, params) => {
  if (type === AUTH_LOGIN) {
    try {
      const { username, password } = params
      let email = username
      const request = new Request(url + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      })
      request.headers.set("X-Origin", "backoffice")
      let response = await fetch(request)
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText)
      }
      let jsonData = await response.json()
      const { profile, services, id, roles } = jsonData

      let role
      if (roles.find((rol) => rol === "admin") === "admin") {
        role = "admin"
      } else if (roles.find((rol) => rol === "user") === "user") {
        role = "user"
      } else if (
        roles.find((rol) => rol === "admin-tvecino") === "admin-tvecino"
      ) {
        role = "admin-tvecino"
      }
      setST("user", profile)
      setST("token", services?.authToken || "")
      setST("role", role)
      setST("expiresAt", services?.expiresAt || "")
      setST("profile", JSON.stringify(profile))
      setST("id", id)

      return Promise.resolve()
    } catch (error) {
      // console.log("error login:", error);
      return Promise.reject()
    }
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token")
    return Promise.resolve()
  }
  if (type === AUTH_ERROR) {
    const status = params.status
    if (status === 401 || status === 403) {
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      localStorage.removeItem("profile")

      return Promise.reject()
    }
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    //return Promise.resolve;
    try {
      let expiresAt = getST("expiresAt")
      let d = new Date(expiresAt._d)
      let n = d.getTime()
      let now = new Date()
      let nw = now.getTime()

      if (n < nw) {
        return Promise.reject({ redirectTo: "/login?sessionExpired=true" })
      }
    } catch (error) {}
    let token = getST("token")
    return token
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/login?sessionExpired=true" })
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = getST("role")
    return Promise.resolve(permissions[role])
  }
  return Promise.resolve()
}
const permissions = {
  admin: {
    profile: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
    mails: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },

    citizen: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
    },
    users: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
    },
    kpi: {
      total: true,
      scans: true,
      offline: true,
      users: true,
    },
    "userintegration-offline": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
      url,
    },
    "cdir/news": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
      url,
    },

    "cdir/history": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
    "cdir/team": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
  },
  "admin-tvecino": {
    profile: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
    citizen: {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
    },
    kpi: {
      total: false,
      scans: false,
      offline: false,
      users: false,
    },
  },
  "admin-cdir": {
    "cdir/news": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: false,
      delete: false,
      url,
    },

    "cdir/history": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
    "cdir/team": {
      enabled: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      delete: true,
    },
    kpi: {
      total: true,
      scans: true,
      offline: true,
      users: true,
    },
  },
}
