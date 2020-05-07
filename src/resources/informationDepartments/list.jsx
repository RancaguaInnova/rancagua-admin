import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DeleteButton
} from 'react-admin'

const InformationdepartmentList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' />
      <TextField source='description' />
      <BooleanField source='active' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default InformationdepartmentList
