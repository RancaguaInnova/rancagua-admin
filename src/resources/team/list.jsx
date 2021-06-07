import React from "react"
import { List, Datagrid, TextField, NumberField, EditButton } from "react-admin"

const NewsList = (props) => (
  <List {...props} title="Listado de Equipo">
    <Datagrid>
      <TextField source="name" label="Nombre" />
      <TextField source="position" label="Cargo" />
      <NumberField source="level" label="Nivel" />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
)
export default NewsList
