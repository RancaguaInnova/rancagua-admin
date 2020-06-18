import React from 'react';
import {Route} from 'react-router-dom';
import UploadCredential from './resources/credentials/upload';
import CreatePdf from './resources/credentials/createPdf';
import {Authenticated} from 'react-admin';

export default [ 
<Route async path="/userintegration-offline/pdf" component={CreatePdf} />,
  <Route
    exact
    path="/userintegration-offline/upload"
    render={() => (
      <Authenticated>
        <UploadCredential />
      </Authenticated>
    )}
  />
 
];
