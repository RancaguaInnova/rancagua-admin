import React from 'react'
import { Edit, SelectInput, SimpleForm, required } from 'react-admin'

const Languages = [{ id: 'en', name: 'English' }, { id: 'es', name: 'Español' }]

const ProfileEdit = ({ staticContext, ...props }) => {
  return (
    <Edit
      id='my-config'
      resource='profile'
      basePath='/profile'
      redirect={false}
      title='Editar Perfil'
      {...props}
    >
      <SimpleForm>
        <SelectInput source='language' choices={Languages} validate={required()} />
      </SimpleForm>
    </Edit>
  )
}

export default ProfileEdit
