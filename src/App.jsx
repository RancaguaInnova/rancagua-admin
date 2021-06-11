import React, { Component } from "react"
import { Admin } from "react-admin"
import { ResourceWithPermissions } from "ra-auth-acl"

import { fetchJson as httpClient } from "./provider/httpClient"
import uploadCapatibilies from "./helpers/uploadCapabilities"
import AuthProvider from "./auth"
import I18nProvider from "./i18n"
import Provider from "./provider"
import Theme from "./theme"

import News from "./resources/news"
import History from "./resources/history"
import Team from "./resources/team"

import LoginPage from "./resources/login"
import Users from "./resources/users"
import Credentials from "./resources/credentials"
import CustomRouters from "./customRouters"
import UrlProvider from "./urlprovider"
import Dashboard from "./resources/dashboard"
import MyLayout from "./MyLayout"
import UsersOffline from "./resources/usersOffline"
import "./App.scss"

class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={uploadCapatibilies(Provider(UrlProvider, httpClient))}
        locale="es"
        i18nProvider={I18nProvider}
        customRoutes={CustomRouters}
        dashboard={Dashboard}
        appLayout={MyLayout}
      >
        {(permissions) => {
          return [
            <ResourceWithPermissions
              name="citizen"
              {...UsersOffline}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="users"
              {...Users}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="userintegration-offline"
              {...Credentials}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="profile"
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="news"
              {...News}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="profile"
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="cdir/news"
              {...News}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="cdir/history"
              {...History}
              permissions={permissions}
            />,
            <ResourceWithPermissions
              name="cdir/team"
              {...Team}
              permissions={permissions}
            />,
          ]
        }}
      </Admin>
    )
  }
}

export default App
