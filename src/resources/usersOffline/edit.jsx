import React from 'react'
import {  Edit, required, SimpleForm, TextInput } from 'react-admin'
import {format }  from 'rut.js'

const UserOfflineEdit = props => (
  <Edit title='Editar Usuario Offline' {...props}>
    <SimpleForm>
      <TextInput source='number' format={v => format(v)} label='Rut' validate={[required("Debe ingresar el número de rut de la persona")]}  />
      <TextInput source='firstName' label='Nombre' validate={[required("Debe ingresar el nombre de la persona")]} />
      <TextInput source='lastName' label='Apellido' validate={[required("Debe ingresar el apellido de la persona")]}  />
      <TextInput source='email' label='E-mail' defaultValue={''}/>
      <TextInput source='phone' label='Teléfono' type={'number'}  />
      <TextInput source='address.streetName' label='Calle' defaultValue={''}/>
      <TextInput source='address.streetNumber' label='Número' defaultValue={''}/>
      <TextInput source='address.departmentNumber' label='Departamento Número'  defaultValue={''} />
      <TextInput source='address.city' label='Ciudad' defaultValue={'Rancagua'} />
    </SimpleForm>
  </Edit>
)
export default UserOfflineEdit
