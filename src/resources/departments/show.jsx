
import React from 'react'
import { TextField, ReferenceField, Show, SimpleShowLayout } from 'react-admin'

export const DepartmentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="optionLabel" />
            <ReferenceField source="informationCategoryId" reference="informationCategories"><TextField source="id" /></ReferenceField>
            <TextField source="businessHours" />
        </SimpleShowLayout>
    </Show>
);
export default DepartmentShow
