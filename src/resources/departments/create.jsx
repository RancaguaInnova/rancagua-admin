import React from 'react'
import { TextInput, SimpleForm, Create, ReferenceInput, SelectInput } from 'react-admin'

export const DepartmentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="optionLabel" />
            <ReferenceInput source="informationCategoryId" reference="informationCategories"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="businessHours" />
        </SimpleForm>
    </Create>
);
export default DepartmentCreate
