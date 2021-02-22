import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import News from "./resources/news";
import Provider from "./provider";
import Theme from "./theme";
import "./App.scss";
import I18nProvider from "./i18n";
import AddUploadCapabilities from "./addUploadCapabilities";
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

class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={AddUploadCapabilities(Provider(UrlProvider, httpClient))}
        locale="es"
        i18nProvider={I18nProvider}
        customRoutes={CustomRouters}
      >
        <Resource name="users" {...Users} />
        <Resource name="news" {...News} />

        <Resource name="InformationCategories" {...InformationCategories} />
        <Resource name="Applications" {...Applications} />
        <Resource name="Officials" {...Officials} />
        <Resource name="Mails" {...Mails} />
        <Resource name="InformationDepartments" {...InformationDepartments} />

        <Resource name="events" {...Eventos} />
        <Resource name="userintegration-offline" />
      </Admin>
    );
  }
}

export default App;
