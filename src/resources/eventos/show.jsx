
import React from 'react'
import { TextField, RichTextField, BooleanField, ReferenceField, DateField, Show, SimpleShowLayout, ArrayField, Datagrid } from 'react-admin'

const EventoShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="address.streetName" />
            <RichTextField source="detail" />
            <TextField source="validators" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="externalUrl" />
            <DateField source="date" />
            <TextField source="time" />
            <TextField source="endTime" />
            <TextField source="optionLabel" />
            <TextField source="imageUrl" />
            <BooleanField source="showInCalendar" />
            <ReferenceField source="departmentId" reference="departments"><TextField source="id" /></ReferenceField>
            <ArrayField source="tags"><Datagrid><TextField source="tag" /></Datagrid></ArrayField>
            <TextField source="locations" />
            <BooleanField source="sendFirebase" />
            <TextField source="firebaseIdEvent" />
            <TextField source="notification" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);
export default EventoShow
