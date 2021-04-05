import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import XLSX from "xlsx";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchJson as httpClient } from "../../dataprovider/httpClient";
import { Redirect } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import ApiUrl from "../../dataprovider/url"

toast.configure({
  autoClose: 2000,
  draggable: false,
  position: toast.POSITION.TOP_CENTER
});

const useStyles = makeStyles((theme) => ({

  root: {
    display: "inline",
    "& > *": {
      marginTop: theme.spacing(2),

      width: "90%"
    }
  },
  form: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16
  },
  textField: {
    margin: theme.spacing(1),
    minWidth: 256
  },
  toolbar: {
    marginTop: theme.spacing(2),
    backgroundColor: "#f5f5f5"
  },
  button: {
    backgroundColor: "#ff5722",
    color: "#fff"
  },
  item: {
    margin: 12
  }
}));
const SectionTitle = ({ label }) => {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
};


export const CredentialUploadUser = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [file, setFile] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const handleChange = e => {
    const files = e;
    if (files && files[0]) setFile(files[0]);
  };
  const handleFile = () => {
    if (file !== null ) {
              const reader = new FileReader();
              const rABS = !!reader.readAsBinaryString;
              reader.onload = e => {
                const bstr = e.target.result;
                const wb = XLSX.read(bstr, {
                  type: rABS ? "binary" : "array",
                  bookVBA: true
                });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                sendData(data);
              };
              if (rABS) {
                reader.readAsBinaryString(file);
              } else {
                reader.readAsArrayBuffer(file);
              }
           
    } else {
      toast.error("Debe cargar un archivo excel")
    }
  };
  const sendData = async (datos) => {
    
    try {
      
      let url = "";
      let options = {};
      options.method = "POST";
      let DATA = datos.map(function(dato) {
        dato.identificationNumber = dato.identificationNumber.toString()
        dato.createAt = new Date()
        return dato
      })

      options.data = { data: DATA };
      url = `${ApiUrl}/userintegration-offline`;
      let response = await httpClient(url, options);
      if (response.status === 200) {
        toast.success("Datos cargados correctamente")
        setTimeout(setRedirect(true), 3000);
      } else {
        toast.error("Se produjo un error al realizar la carga del archivo en la base de datos")
      }
    } catch (e) {
      toast.error("Se produjo un error al realizar la carga del archivo en la base de datos")

    }
  };

  useEffect(() => {
    async function fetchData() {
    }
    fetchData()
  }, []);
  return (
    redirect ? (<Redirect to='/userintegration-offline' />) : (
      <div className={classes.root}>
        <Paper variant="outlined">
          <form noValidate autoComplete="off" className={classes.form}>
            <SectionTitle label="Carga de archivo con usuarios para credencial offline." />
          
            <Grid item xs={12} container className={classes.item}>

              <DropzoneArea
                acceptedFiles={[
                  ".xlsx"
                ]}
                showPreviews={true}
                maxFileSize={5000000}
                onChange={handleChange}
                dropzoneText="Agregar archivo"
              />
            </Grid>
          </form>
          <Toolbar className={classes.toolbar}>
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleFile}
            >
              Guardar
          </Button>
          </Toolbar>
        </Paper>


      </div>
    )
  );
};
export default CredentialUploadUser;
