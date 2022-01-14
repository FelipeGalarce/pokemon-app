import Modal from 'react-bootstrap/Modal'
import Boton from './Boton'
import Login from './Login'


const ModalPop = ({clickCerrar, show, handleClose, logear}) => {
    return (
        <Modal show={show} onHide={handleClose}>

            <Modal.Body><Login logear={logear} uso="Inicia Sesion" textoBoton="Iniciar Sesion" primerInput="Ingresa tu Usuario(email)" segundoInput="Ingresa tu contraseña"/></Modal.Body>
            <Modal.Footer>
               
                
        
                <Boton color="warning" texto="Cerrar" click={clickCerrar}/>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPop
