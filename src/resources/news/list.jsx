import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const NewsList = props => (
  <List {...props} title='Listado de Noticias'>
    <Datagrid rowClick='edit' className='ListTable-striped ListTable'>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Sub Título' />
      <DateField source='publicationDate' label='Fecha de publicación' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)
export default NewsList
