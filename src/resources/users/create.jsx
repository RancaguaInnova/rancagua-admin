import React from 'react'
import { TextInput, DateInput, SimpleForm, SelectInput, Create } from 'react-admin'
import InputSearchPlace from '../../components/fields/inputSearchPlace'
const UserEdit = props => (
  <Create title='Crear Usuario' {...props}>
    <SimpleForm>
      <TextInput source='profile.firstName' label='Nombre' />
      <TextInput source='profile.lastName' label='Apellido' />
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput source='profile.birthdate' label='Fecha de Nacimiento' />
      <InputSearchPlace source='profile.address'></InputSearchPlace>
    </SimpleForm>
  </Create>
)
export default UserEdit
