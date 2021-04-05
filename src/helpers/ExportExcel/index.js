import React, { cloneElement, Fragment, useState, useEffect } from "react";

import { SiMicrosoftexcel } from "react-icons/si";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { getAllRegions } from "../../pages/Dashboard/data";
import "./styles.scss";
import { useDataProvider, Loading, Error } from "react-admin";
import { fetchJson as httpClient } from "../../dataprovider/httpClient";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import Urlprovider from "../../urlprovider";
import queryString from "query-string";
import _get from "lodash/get";
import _map from "lodash/map";

import Spinner from "react-bootstrap/Spinner";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props}></Slide>;
});

const ExportListPro = ({ resource, labelName,type }) => {

  const [open, setOpen] = React.useState(false);
  const [region, setRegion] = React.useState("");
  const [exportData, setExportData] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const [title, setTitle] = useState("Todas");
  const dataProvider = useDataProvider();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getAllRegions();
        setRegions(response);
      } catch (error) { }
    };

    fetchData();
  }, []);
  const handleSelect = (regionId) => {
    setRegion(regionId);
    if (regionId !== "") {
      const res = regions.find((region) => region._id === regionId);
      setTitle(res.name);
    } else {
      setTitle("Todas");
    }
  };
  const handleExport = async () => {
    setLoading(true);
    try {
      let options = {},
        urldata;
      options.method = "GET";
      if(type===0){
        urldata = `${Urlprovider}/${resource}?limit=20000&region=${region}&query={"type":{"$in":["seller"]}}&skip=0&sort={"createdAt":-1}`;

      }else{
        urldata = `${Urlprovider}/${resource}?limit=20000&region=${region}&query={"type":{"$in":["services","mix"]}}&skip=0&sort={"createdAt":-1}`;

      }
      let response = await httpClient(urldata, options);
      const { data } = response;
      let dataexport = data;
      if (resource === "seller") {
        dataexport = data.map(function (item, index) {
          let seller = {
            Nombre: _get(item, "personalInformation.name", ""),
            Apellido: _get(item, "personalInformation.lastName", ""),
            Rut: _get(item, "personalInformation.identification.value", ""),
            Producto: _get(item, "product", ""),
            Email: _get(item, "contactInformation.email.address", ""),
            telefono: _get(item, "contactInformation.phone.number", ""),
          };
          return seller;
        });
      }
      if (resource === "pro") {
        dataexport = data.map(function (item, index) {
          let service = _get(item, "services", []).length > 0 ? _map(_get(item, "services", []), function (service) {
            if (service.speciality) return service.speciality.name
            else return ""
          }).join(' - ') : ""
          let seller = {
            Nombre: _get(item, "user.personalInformation.name", ""),
            Apellido: _get(item, "user.personalInformation.lastName", ""),
            Rut: _get(
              item,
              "user.personalInformation.identification.value",
              ""
            ),
            Email: _get(item, "user.contactInformation.email.address", ""),
            telefono: _get(item, "user.contactInformation.phone.number", ""),
            servicios: service,
            Calle: _get(item, "user.contactInformation.address.street", ""),
            Numero: _get(item, "user.contactInformation.address.number", ""),
            Dpto: _get(item, "user.contactInformation.address.departament", ""),
            Comuna: _get(item, "user.contactInformation.address.city.name", ""),
          };
          return seller;
        });
      }

      const ws = XLSX.utils.json_to_sheet(dataexport);
      const wb = {
        Sheets: {
          info: ws,
        },
        SheetNames: ["info"],
      };
      const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
      });
      const Newdata = new Blob([excelBuffer], { type: fileType });
      let name_file;
      if(type===0){
        name_file=labelName+"_vendedores";
      }else{
        name_file =labelName+"_servicios";
      }


      FileSaver.saveAs(Newdata, name_file + fileExtension);
      setLoading(false);
      handleClose();
      return true;
    } catch (e) {
      setLoading(false);

      return false;
    }
  };

  return (
    <div>
      <Button
        color="secondary"
        startIcon={<SiMicrosoftexcel />}
        onClick={handleClickOpen}
      >
        Exportar {labelName}{" "}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Exportar " + labelName}{" "}
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <Button disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Generando Excel...
            </Button>
          ) : (
              <div id="alert-dialog-slide-description">
                <div>
                  Seleccione la region de los {labelName}a exportar a excel
              </div>
                <div>
                  <DropdownButton
                    title={title}
                    id="dropdown-menu-align-right"
                    className="searchDashboard"
                    onSelect={handleSelect}
                  >
                    <Dropdown.Item key={"Todas"} eventKey={""}>
                      Todas
                  </Dropdown.Item>
                    {regions.map(function (region) {
                      return (
                        <Dropdown.Item key={region._id} eventKey={region._id}>
                          {region.name}{" "}
                        </Dropdown.Item>
                      );
                    })}{" "}
                  </DropdownButton>
                </div>
              </div>
            )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Salir
          </Button>
          <Button onClick={handleExport} color="primary">
            EXPORTAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ExportListPro;
