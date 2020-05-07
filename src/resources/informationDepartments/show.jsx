
import React from 'react'
import { TextField, BooleanField, ReferenceField, Show, SimpleShowLayout } from 'react-admin'
export const InformationdepartmentShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="contactInformation.address.streetName" />
            <TextField source="tags" />
            <TextField source="name" />
            <TextField source="optionLabel" />
            <ReferenceField source="managerId" reference="managers"><TextField source="id" /></ReferenceField>
            <ReferenceField source="informationCategoryId" reference="informationCategories"><TextField source="id" /></ReferenceField>
            <ReferenceField source="serviceAreaId" reference="serviceAreas"><TextField source="id" /></ReferenceField>
            <BooleanField source="active" />
            <TextField source="imageHeader" />
            <TextField source="imageUrl" />
            <TextField source="businessHours" />
            <TextField source="iconMapUrl" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);
export default InformationdepartmentShow
