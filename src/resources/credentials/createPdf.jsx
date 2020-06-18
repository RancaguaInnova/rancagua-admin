import React, { useEffect, useState } from 'react';
import PDFViewer, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import QRCode from 'qrcode.react'
import ApiUrl from "../../provider/url"
import { format } from 'rut.js'
import Pdf from "react-to-pdf";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'
import './styles.scss'
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const urlValidacion = 'https://webviews.smartrancagua.com/validationCredential?code='
// Create Document Component
const CreatePdf = () => {

    const [datos, setDatos] = useState();

    const users = async () => {
        try {
            const request = new Request(ApiUrl + '/userintegration-offline', {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json', 'X-Origin': 'Admin' })
            })

            const response = await fetch(request)
            if (response.status === 200) {
                try {


                    return await response.json()
                } catch (error) {
                    return []
                }
            } else {
                return []
            }
        } catch (error) {
            return []
        }


    }
    useEffect(async () => {
        let data = await users()
        setDatos(data);
    }, []);
    const ref = React.createRef();

    const   printDocument=()=> {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
      }
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="credencial funcionario.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className='pdf'>
                <Document>
                    {datos && datos.map((item, index) => {


                        return (
                            <div key={index}>
                                {console.log(index)}
                                {index < 10 &&
                                    <Page size="A4" style={styles.page} >

                                        <View style={styles.section}>

                                            <div className="officialCredential">
                                                <div className='logo'><img src='/assets/img/credential/logo.png'></img></div>

                                                <div className="fila">
                                                    <div className="columna Credencial">
                                                        <div className="backofficialCredential">
                                                            <h4 className='text-center'>CREDENCIAL MUNICIPAL</h4>
                                                            <div className="Flex dataCredential">
                                                                <div className="divDatos">
                                                                    <div className="TextoTarjeta">
                                                                        Nombre:{' '}{item.name ? item.name : ''}
                                                                    </div>
                                                                    <div className="TextoTarjeta">
                                                                        Rut:{' '}{item.identificationNumber ? format(item.identificationNumber) : ''}
                                                                    </div>
                                                                    {item.department ? (
                                                                        <div className="TextoTarjeta">
                                                                            Departamento:{' '}{item.department}
                                                                        </div>)
                                                                        : ''}

                                                                </div>
                                                            </div>

                                                            <div className="divQr">
                                                                <QRCode
                                                                    value={urlValidacion + item.offlineToken}
                                                                    bgColor="#FFFFFF"
                                                                    fgColor="#000000"
                                                                    includeMargin={true}
                                                                    size={200}
                                                                    level="L"
                                                                />
                                                            </div>
                                                            <div className='textvalidation'>Escanee este código qr para validar esta Credencial</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </View>

                                    </Page>
                                }
                            </div>
                        )

                    }

                    )}

                </Document>
            </div>
        </div>




    );
}
export default CreatePdf;
