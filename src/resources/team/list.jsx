import React from "react"
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  Filter,
  SearchInput,
} from "react-admin"

const TeamFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="name" alwaysOn />
  </Filter>
)

const TeamList = (props) => (
  <List
    {...props}
    title="Listado de Equipo"
    filters={<TeamFilter></TeamFilter>}
  >
    <Datagrid>
      <TextField source="name" label="Nombre" />
      <TextField source="position" label="Cargo" />
      <NumberField source="level" label="Nivel" />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
)
export default TeamList
