import React from 'react'
import { TextInput, Create, SimpleForm, ReferenceArrayInput, ReferenceInput, SelectInput, SelectArrayInput, ChipField } from 'react-admin'

const InformationcategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <ReferenceInput source="parent._id" reference="informationCategories" label="Categoría Padre"><SelectInput optionText="name" /></ReferenceInput>
            <ReferenceArrayInput source="childIds" reference="informationCategories" label="Categorias hijos">
                <SelectArrayInput>
                    <ChipField source="name" />
                </SelectArrayInput>
            </ReferenceArrayInput>
            <TextInput source="iconURL" label='Url Icono' />
            <TextInput source="optionLabel" />
            <TextInput source="urlRedirect" label='Url de redirección' />
            <TextInput source="imageHeaderUrl" label='Url Imagen Header' />
            <TextInput source="tags" />
            <TextInput source="active" label='Activo' />
        </SimpleForm>
    </Create>
);
export default InformationcategoryCreate
