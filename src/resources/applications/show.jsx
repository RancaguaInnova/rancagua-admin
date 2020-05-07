
import React from 'react'
import { TextField, BooleanField, Show, SimpleShowLayout } from 'react-admin'

export const ApplicationShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="applicationURL" />
            <BooleanField source="approved" />
            <TextField source="appToken" />
            <BooleanField source="isPrivate" />
            <TextField source="developerInfo.address.streetName" />
            <TextField source="userFields" />
            <BooleanField source="appMovil" />
            <TextField source="appName" />
            <TextField source="appStoreId"></TextField>
            <TextField source="appStoreLocale" />
            <TextField source="playStoreId"></TextField>
            <TextField source="urlApp" />
        </SimpleShowLayout>
    </Show>
);
export default ApplicationShow
