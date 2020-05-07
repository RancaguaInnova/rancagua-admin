import React from 'react'
import { List, Datagrid, TextField, DateField,EditButton,DeleteButton } from 'react-admin'

export const EventoList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='date' label='Fecha' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default EventoList
