import React from 'react'
import { Create, DateInput, SelectInput, SimpleForm, TextInput,required } from 'react-admin'

const UserOfflineCreate = props =>{
  console.log("props",props)
  return(<Create title='Crear Usuario Offline' {...props}   >
  <SimpleForm redirect="list">
    <TextInput source='number' label='Rut' validate={[required("Debe ingresar el número de rut de la persona")]}  />
    <TextInput source='firstName' label='Nombre' validate={[required("Debe ingresar el nombre de la persona")]} />
    <TextInput source='lastName' label='Apellido' validate={[required("Debe ingresar el apellido de la persona")]}  />
    <TextInput source='email' label='E-mail' defaultValue={''}/>
    <TextInput source='phone' label='Teléfono' type={'number'}  />
    <TextInput source='address.streetName' label='Calle' defaultValue={''}/>
    <TextInput source='address.streetNumber' label='Número' defaultValue={''}/>
    <TextInput source='address.departmentNumber' label='Departamento Número'  defaultValue={''} />
    <TextInput source='address.city' label='Ciudad' defaultValue={'Rancagua'} />
  </SimpleForm>
</Create>)}
export default UserOfflineCreate
