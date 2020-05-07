import React from 'react'
import {
  TextInput,
  SimpleForm,
  Edit,
  SelectInput,
  
  DateInput
} from 'react-admin'

const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='profile.firstName' label='Nombre' />
      <TextInput source='profile.lastName' label='Apellido' />
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput
        source='profile.birthdate'
        label='Fecha de Nacimiento'
        options={{ format: 'dd/MM/YYYY' }}
      />
    </SimpleForm>
  </Edit>
)
export default UserEdit
