import React from 'react'
import { TextInput, DateInput, SimpleForm, Edit, BooleanInput, ArrayInput, SimpleFormIterator } from 'react-admin'

export const EventoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="date" />
            <TextInput source="time" />
            <TextInput source="endTime" />
            <TextInput source="address.streetName" />
            <TextInput source="address.streetNumber" />

            <TextInput source="detail" />
            <TextInput source="validators" />

            <TextInput source="externalUrl" />

            <TextInput source="optionLabel" />
            <TextInput source="imageUrl" />
            <BooleanInput source="showInCalendar" />
            <TextInput source="departmentId" />

       
            <ArrayInput source="tags"><SimpleFormIterator><TextInput source="tag" /></SimpleFormIterator></ArrayInput>
            <TextInput source="locations" />
            <BooleanInput source="sendFirebase" />
            <TextInput source="firebaseIdEvent" />
            <TextInput source="notification" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);
export default EventoEdit
