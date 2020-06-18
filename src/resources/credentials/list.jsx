import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'
import Toolbar from './toolbar'
import CreatePdf from './createPdf'
import SavePdf from './savePdf'
const CredentialList = (props) => {
 const generarPdf=()=>{
  SavePdf(<CreatePdf></CreatePdf>,'funcionarios.pdf')
 }

  return(
  <List {...props} title='Listado de funcionarios con credenciales fisicas' actions={<Toolbar generarPdf={generarPdf} {...props} />}
  >
    <Datagrid >
      <TextField source='name' label='Nombre' />
   
    </Datagrid>
  </List>
)
  }
export default CredentialList
