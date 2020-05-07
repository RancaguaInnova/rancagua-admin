import React from 'react'
import { TextInput, DateInput, SimpleForm, Create, BooleanInput, ReferenceInput, SelectInput, ArrayInput, SimpleFormIterator } from 'react-admin'

const EventoCreate = props => (
    <Create title='Crear Noticias' {...props}>
        <SimpleForm>
            <TextInput source="address.streetName" />
            <TextInput source="detail" />
            <TextInput source="validators" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="externalUrl" />
            <DateInput source="date" />
            <TextInput source="time" />
            <TextInput source="endTime" />
            <TextInput source="optionLabel" />
            <TextInput source="imageUrl" />
            <BooleanInput source="showInCalendar" />
            <ReferenceInput source="departmentId" reference="departments"><SelectInput optionText="id" /></ReferenceInput>
            <ArrayInput source="tags"><SimpleFormIterator><TextInput source="tag" /></SimpleFormIterator></ArrayInput>
            <TextInput source="locations" />
            <BooleanInput source="sendFirebase" />
            <TextInput source="firebaseIdEvent" />
            <TextInput source="notification" />
            <TextInput source="id" />
        </SimpleForm>
    </Create>)
export default EventoCreate
