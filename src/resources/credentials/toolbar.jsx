import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { CreateButton, ExportButton, sanitizeListRestProps } from "react-admin";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";


const CredentialActions = (props) => {
    
    return (
      <Toolbar {...props}>
    
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
        onClick={props.generarPdf}

         >
          Generar PDF
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
    );
  };
  export default CredentialActions