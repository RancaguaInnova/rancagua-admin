import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

const ProjectList = props => (
  <List {...props} title='Listado de proyectos'>
    <Datagrid>
      <TextField source='title' label='Título' />
      <TextField source='subtitle' label='Sub Título' />
      <DateField source='publicationDate' label='Fecha de publicación' />
      <EditButton label='Editar' />
    </Datagrid>
  </List>
)
export default ProjectList
