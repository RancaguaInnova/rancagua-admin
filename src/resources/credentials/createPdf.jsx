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

    const finish = () => {
        console.log('on finish!')
    }

    const credential = (user) => (<div className="officialCredential">
        <div className='logo'><img src='/assets/img/credential/logo.png'></img></div>

        <div className="fila">
            <div className="columna Credencial">
                <div className="backofficialCredential">
                    <h4 className='text-center'>CREDENCIAL MUNICIPAL</h4>
                    <div className="Flex dataCredential">
                        <div className="divDatos">
                            <div className="TextoTarjeta">
                                Nombre:{' '}{user.name ? user.name : ''}
                            </div>
                            <div className="TextoTarjeta">
                                Rut:{' '}{user.identificationNumber ? format(user.identificationNumber) : ''}
                            </div>
                            {user.department ? (
                                <div className="TextoTarjeta">
                                    Departamento:{' '}{user.department}
                                </div>)
                                : ''}

                        </div>
                    </div>

                    <div className="divQr">
                        <QRCode
                            value={urlValidacion + user.offlineToken}
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
    </div>)

    return (
        <div className="App">
            <ReactToPdf targetRef={ref} filename="funcionarios.pdf" options={options} x={.5} y={.5} onComplete={finish}>
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div ref={ref}>
                {datos && datos.map((item, index) => {return(
                    <div  key={index}>
                    {index<10 && (
                    <div className='letter' >
                        {credential(item)}
                    </div>
                    )}
                    </div>
                )})}
            </div>
        </div>)



}
export default CreatePdf;
