import React from 'react'
import { TextInput, SimpleForm, Edit, BooleanInput, ReferenceInput, SelectInput } from 'react-admin'

export const InformationdepartmentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" label='Nombre' />
            <TextInput source="optionLabel" />
            <TextInput source="contactInformation.address.streetName" label='Calle' />
            <TextInput source="contactInformation.address.streetNumber" label='Numero Calle' />
            <TextInput source="contactInformation.address.city" label='Ciudad' />
            <TextInput source="contactInformation.address.administrativeAreaLevel1" label='Región' />
            <TextInput source="contactInformation.address.administrativeAreaLevel2" label='Provincia' />
            <TextInput source="contactInformation.address.country" label='Pais' />
            <TextInput source="contactInformation.address.formatted_address" label='Dirección Formato Google' />
            <TextInput source="contactInformation.address.place_id" label='Id Lugar' />
            <TextInput source="contactInformation.address.latitude" label='Latitude' />
            <TextInput source="contactInformation.address.longitude" label='Longitud' />
            <TextInput source="tags" />
            <TextInput source="businessHours" label='Horario de atención' />
            <TextInput source="imageHeader" label="Imagen cabecera" />
            <TextInput source="imageUrl" label="Imagen url" />
            <TextInput source="iconMapUrl" label="Icono Mapa" />
            <ReferenceInput source="managerId" reference="officials"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceInput source="informationCategoryId" reference="informationCategories"><SelectInput optionText="name" /></ReferenceInput>
            <BooleanInput source="active" label="Activo" />
        </SimpleForm>
    </Edit>
);
export default InformationdepartmentEdit
