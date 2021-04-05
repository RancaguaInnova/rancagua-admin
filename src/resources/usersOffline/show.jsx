import React from 'react'
import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin'

const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='profile.firstName' label='Nombre' />
      <TextField source='profile.lastName' label='Apellido' />
      <TextField source='profile.gender' label='Sexo' />
      <DateField source='profile.birthdate' label='Fecha de nacimiento' />
    </SimpleShowLayout>
  </Show>
)
export default UserShow
