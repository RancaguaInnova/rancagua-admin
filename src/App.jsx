import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import News from "./resources/news";
import Projects from "./resources/projects";

import Provider from "./provider";
import Theme from "./theme";
import "./App.scss";
import I18nProvider from "./i18n";
import uploadCapatibilies from "./helpers/uploadCapabilities";
import AuthProvider from "./auth";
import LoginPage from "./resources/login";
import Users from "./resources/users";
import Eventos from "./resources/eventos";
import InformationCategories from "./resources/informationCategories";
import InformationDepartments from "./resources/informationDepartments";
import Applications from "./resources/applications/";
import Officials from "./resources/officials";
import Mails from "./resources/mails";
import Credentials from "./resources/credentials";
import CustomRouters from "./customRouters";
import { fetchJson as httpClient } from "./provider/httpClient";
import UrlProvider from "./urlprovider";
import Dashboard from './resources/dashboard'
import MyLayout from './MyLayout';
import { ResourceWithPermissions } from 'ra-auth-acl'
import UsersOffline from './resources/usersOffline'


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
        {permissions => {
          return ([
            <ResourceWithPermissions name='citizen' {...UsersOffline} permissions={permissions}/>,
            <ResourceWithPermissions name='users' {...Users} permissions={permissions}/>,
            <ResourceWithPermissions name='userintegration-offline' {...Credentials} permissions={permissions}/>,
            <ResourceWithPermissions name="profile"  permissions={permissions}/>,
            <ResourceWithPermissions name="news" {...News}   permissions={permissions}/>,
            <ResourceWithPermissions name="profile"  permissions={permissions}/>,
            <ResourceWithPermissions name="cdir/news" {...News} permissions={permissions}/>,
            <ResourceWithPermissions name="cdir/projects" {...Projects} permissions={permissions}/>

            /*
                        <ResourceWithPermissions name="mails" {...Mails} permissions={permissions}/>
            */

          ])
        }
        }
   {/*     <Resource name="users" {...Users} />
        <ResourceWithPermissions name='citizen' {...UsersOffline} permissions={permissions}/>,
        <Resource name="credentials" {...Credentials} />

        <Resource name="InformationCategories" {...InformationCategories} />
        <Resource name="Applications" {...Applications} />
        <Resource name="Officials" {...Officials} />
        <Resource name="Mails" {...Mails} />
        <Resource name="InformationDepartments" {...InformationDepartments} />
        <Resource name="events" {...Eventos} />
        <Resource name="userintegration-offline" />*/}
      </Admin>
    );
  }
}

export default App;
