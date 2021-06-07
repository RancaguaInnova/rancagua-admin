import React from "react"
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin"

const NewsList = (props) => {
  const postRowStyle = (record, index) => ({
    backgroundColor: record.nb_views >= 500 ? "#efe" : "white",
  })
  return (
    <List {...props} title="Listado de Noticias">
      <Datagrid rowStyle={postRowStyle}>
        <TextField source="title" label="Título" />
        <TextField source="subtitle" label="Sub Título" />
        <DateField source="publicationDate" label="Fecha de publicación" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  )
}
export default NewsList
