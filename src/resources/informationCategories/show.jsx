
import React from 'react'
import { TextField, ReferenceArrayField, ReferenceField, Show, SimpleShowLayout } from 'react-admin'
const InformationcategoryShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField source="parent._id" reference="parent.s"><TextField source="id" /></ReferenceField>
            <TextField source="tags" />
            <ReferenceArrayField source="childIds" reference="children"><TextField source="id" /></ReferenceArrayField>
            <TextField source="active" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="iconURL" />
            <TextField source="optionLabel" />
            <TextField source="urlRedirect" />
            <TextField source="imageHeaderUrl" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);
export default InformationcategoryShow
