import React from "react"
import {
  Datagrid,
  FunctionField,
  EditButton,
  Filter,
  List,
  TextField,
  TextInput,
  SimpleList,
} from "react-admin"
import { format } from "rut.js"
import { useMediaQuery } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

const UsersFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Rut" source="number" alwaysOn type={"text"} />
    <TextInput source="firstName" label="Nombre" alwaysOn type={"text"} />
    <TextInput source="lastName" label="Apellido" alwaysOn type={"text"} />
  </Filter>
)
const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"))

  return (
    <List
      {...props}
      title={"Listado de Usuarios Offline"}
      filters={<UsersFilter />}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => `${format(record.number)} `}
          secondaryText={(record) => `${record.firstName} ${record.lastName} `}
          tertiaryText={(record) => props.hasEdit && <EditIcon />}
        />
      ) : (
        <Datagrid>
          <FunctionField
            label="Rut"
            render={(record) => `${format(record.number)} `}
          />
          <TextField source="firstName" label="Nombres" />
          <TextField source="lastName" label="Apellidos" />
          <TextField source="email" label="Email" />
          <TextField source="phone" label="Teléfono" />
          <TextField source="status" label="Estatus" />
          {props.hasEdit && <EditButton label="Editar"></EditButton>}
        </Datagrid>
      )}
    </List>
  )
}

export default UserList
