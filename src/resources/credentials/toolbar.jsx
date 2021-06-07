import React from "react"
import Toolbar from "@material-ui/core/Toolbar"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const CredentialActions = (props) => {
  return (
    <Toolbar>
      <Button
        startIcon={<CloudUploadIcon />}
        component={Link}
        to={{
          pathname: "/userintegration-offline/upload",
        }}
      >
        Cargar Funcionarios
      </Button>

      <Button
        startIcon={<CloudUploadIcon />}
        component={Link}
        to={{
          pathname: "/userintegration-offline/pdf",
        }}
      >
        Ver Pdf
      </Button>
    </Toolbar>
  )
}
export default CredentialActions
