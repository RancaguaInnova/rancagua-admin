import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton,ReferenceField } from 'react-admin'
const OfficialList = props => (
  <List {...props} title='Listado de funcionarios'>
    <Datagrid rowClick='edit'>
      <TextField source='firstname' label='Nombre' />
      <TextField source='lastname' label='Apellido' />
      <ReferenceField label='Departamentos' source="department" reference="departments"><TextField source="name" /></ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default OfficialList
