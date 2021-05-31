import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";
import { ShowButton } from "react-admin";

const NewsList = (props) => (
  <List {...props} title="Listado de Equipo">
    <Datagrid>
      <TextField source="name" label="Nombre" />
      <TextField source="position" label="Cargo" />
      <DateField source="nivel" label="Nivel" />
      <EditButton label="Editar" />
    </Datagrid>
  </List>
);
export default NewsList;
