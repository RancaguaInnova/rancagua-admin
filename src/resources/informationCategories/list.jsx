import React from 'react'
import { List, Datagrid, TextField, BooleanField, EditButton, DeleteButton } from 'react-admin'

const InformationcategoryList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <BooleanField source='active' label='Activo' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default InformationcategoryList
