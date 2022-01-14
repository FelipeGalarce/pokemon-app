import Modal from 'react-bootstrap/Modal'
import Boton from './Boton'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'


const ModalCrear = ({ clickCerrar, show, handleClose, crear }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length === 0) {
            crear(null);
        }
    };


    const onChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length === 0) {
            crear(null);
        }
    };

    const onClick = async () => {
        let datos = { email: email, password: password }
        await crear(datos);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Container className="bg-light d-flex justify-content-center align-items-center ">
                    <div className='login text-center'>
                        <h2>Crea tu Cuenta</h2>
                        <div className='d-flex justify-content-center flex-column'>
                            <input onChange={onChangeEmail} type="text" placeholder="Ingresa Tu Correo" />
                            <input onChange={onChangePassword} type="password" placeholder="Ingresa la Contraseña que desees" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            {/* {password & email ?  <div className='m-2'><Boton color='success' click={onClick} texto="Crear Cuenta"/></div>: ""} */}
                            <div className='m-2'><Boton color='success' click={onClick} texto="Crear Cuenta" /></div>
                        </div>
                    </div>
                </Container>
            </Modal.Body>
            <Modal.Footer>



                <Boton color="warning" texto="Cerrar" click={clickCerrar} />
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCrear
