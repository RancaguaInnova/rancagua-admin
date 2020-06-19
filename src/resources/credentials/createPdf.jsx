import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react'
import ApiUrl from "../../provider/url"
import { format } from 'rut.js'
import './styles.scss'
import ReactToPdf from 'react-to-pdf'

const urlValidacion = 'https://webviews.smartrancagua.com/validationCredential?code='
// Create Document Component
const CreatePdf = () => {

    const [datos, setDatos] = useState([]);

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
    useEffect(() => {
        async function getUsers() {
            let data = await users()

            setDatos(data);
        }

        getUsers()
    }, []);

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };

    return (
        <div className="App">
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
                {datos && datos.map((item, index) => (
                    <div className='letter' key={index} >
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
                    </div>


                ))}
            </div>
        </div>


    );
}
export default CreatePdf;
