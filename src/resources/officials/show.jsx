import React from 'react'

import {Show,SimpleShowLayout,TextField} from 'react-admin'

 const OfficialShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="optionLabel" />
            <TextField source="department" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
)
export default OfficialShow