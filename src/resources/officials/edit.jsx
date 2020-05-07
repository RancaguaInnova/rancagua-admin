import React from 'react'

import {Edit,SimpleForm,TextInput} from 'react-admin'

 const OfficialEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="optionLabel" />
            <TextInput source="department" />
        </SimpleForm>
    </Edit>
);
export  default OfficialEdit;