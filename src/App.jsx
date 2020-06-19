import React, { Component } from 'react'
import { Admin, Resource } from 'react-admin'
import News from './resources/news'
import Provider from './provider'
import Theme from './theme'
import './App.scss'
import I18nProvider from './i18n'
import AddUploadCapabilities from './addUploadCapabilities'
import AuthProvider from './auth'
import LoginPage from './resources/login'
import Users from './resources/users'
import Eventos from './resources/eventos'
import InformationCategories from './resources/informationCategories'
import InformationDepartments from './resources/informationDepartments'
import Applications from './resources/applications/'
import Officials from './resources/officials'
import Mails from './resources/mails'
import Credentials from './resources/credentials'
import CustomRouters from './customRouters'
class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={AddUploadCapabilities(Provider)}
        locale='es'
        i18nProvider={I18nProvider}
        customRoutes={CustomRouters}

      >
      <Resource name='users' {...Users} />
        


      </Admin>
    )
  }
}

export default App
