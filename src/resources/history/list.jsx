import React from "react"
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField,
  Filter,
  SearchInput,
} from "react-admin"

const HistoryFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="cardTitle" alwaysOn />
  </Filter>
)

const HistoryList = (props) => (
  <List
    {...props}
    title="Listado de Historia"
    filters={<HistoryFilter></HistoryFilter>}
  >
    <Datagrid rowClick="edit">
      <DateField source="date" label="Título" showTime={false} />
      <TextField source="cardTitle" label="Título" />
      <TextField source="cardSubtitle" label="Subtítulo" />
      <TextField source="cardDetailedText" label="Detalle" />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
)
export default HistoryList
