import React from "react"
import { List, Datagrid, TextField, EditButton, DateField } from "react-admin"

const HistoryList = (props) => (
  <List {...props} title="Listado de Historia">
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
