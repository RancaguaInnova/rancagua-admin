import React from 'react'
import { List, Datagrid, TextField, BooleanField, EditButton, DeleteButton } from 'react-admin'

const ApplicationList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <BooleanField source='approved' />
      <BooleanField source='isPrivate' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default ApplicationList
