import React from 'react'
import {List, Datagrid, TextField, EditButton, Filter, TextInput} from 'react-admin'
import Toolbar from './toolbar'
import CreatePdf from './createPdf'
import SavePdf from './savePdf'

const CredendialFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Rut" source="identificationNumber"  alwaysOn type={'text'}/>
        <TextInput source='name' label='Nombre' alwaysOn type={'text'}/>
    </Filter>
)
const CredentialList = (props) => {
 const generarPdf=()=>{
  SavePdf(<CreatePdf></CreatePdf>,'funcionarios.pdf')
 }
  return(
  <List {...props} title='Listado de funcionarios con credenciales fisicas' actions={<Toolbar generarPdf={generarPdf} {...props} />}
        filters={<CredendialFilter />}>
    <Datagrid >
      <TextField source='name' label='Nombre' />
      <TextField source='identificationNumber' label='Rut' />
      <TextField source='contract' label='Tipo Contrato' />
      <TextField source='active' label='Activo' />
      <TextField source='role' label='Role' />
    </Datagrid>
  </List>
)
  }
export default CredentialList
