import React from 'react'
import { TextInput, SimpleForm, Edit, ReferenceInput, SelectInput } from 'react-admin'

export const DepartmentEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="optionLabel" />
            <ReferenceInput source="informationCategoryId" reference="informationCategories"><SelectInput optionText="id" /></ReferenceInput>
            <TextInput source="businessHours" />
        </SimpleForm>
    </Edit>
);
export default DepartmentEdit
