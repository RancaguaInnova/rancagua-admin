import React from 'react'
import { TextInput, SimpleForm, Create, BooleanInput } from 'react-admin'

export const ApplicationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nombre" />
            <TextInput source="description" label="Descripción" />
            <TextInput source="applicationURL" label="Url de aplicación" />
            <BooleanInput source="approved" label="Aplicación aprovada" />
            <BooleanInput source="isPrivate" label="Es Privada" />
            <TextInput source="appToken" label="Token Aplicación" />
            <TextInput source="developerInfo.address.streetName" label="Calle" />
            <TextInput source="userFields" label="Campos de Usuario Utilizados" />
            <BooleanInput source="appMovil" label="Es aplicación movil" />
            <TextInput source="appName" label="Nombre de la aplicación" />
            <TextInput source="appStoreId" label="Id App Strore"></TextInput>
            <TextInput source="appStoreLocale" label="Región App Store" />
            <TextInput source="playStoreId" label="Id Play Store"></TextInput>
            <TextInput source="urlApp" label="Url App" />
        </SimpleForm>
    </Create>
);
export default ApplicationCreate
