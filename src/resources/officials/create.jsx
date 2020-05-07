import React from 'react'

import {Create,SimpleForm,TextInput} from 'react-admin'

 const OfficialEdit = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="optionLabel" />
            <TextInput source="department" />
        </SimpleForm>
    </Create>
);
export default OfficialEdit