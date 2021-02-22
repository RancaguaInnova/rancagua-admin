import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  Filter,
  TextInput,
} from "react-admin";

const EventFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="name" alwaysOn />
    <TextInput label="Fecha" source="date" defaultValue="" alwaysOn />
    <TextInput
      label="Descripción"
      source="description"
      defaultValue=""
      alwaysOn
    />
  </Filter>
);
export const EventoList = (props) => (
  <List {...props} filters={<EventFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nombre" />
      <TextField source="description" label="Descripción" />
      <DateField source="date" label="Fecha" />
      <EditButton label="Editar" />
      {/*       <DeleteButton label='Eliminar' />
       */}{" "}
    </Datagrid>
  </List>
);
export default EventoList;
