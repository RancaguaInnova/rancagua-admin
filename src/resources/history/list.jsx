import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'
import { ShowButton } from 'react-admin';

const HistoryList = props => (
  <List {...props} title='Listado de Historia'>
    <Datagrid rowClick='edit'>
    <TextField source='date' label='Título' />
      <TextField source='cardTitle' label='Título' />
      <TextField source='cardSubtitle' label='Subtítulo' />
      <TextField source='cardDetailedText' label='Detalle' />
      <EditButton label='Editar' />
    </Datagrid>
  </List>
)
export default HistoryList
