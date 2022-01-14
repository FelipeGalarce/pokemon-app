import Modal from 'react-bootstrap/Modal'




const Usuarios = ({ show, handleClose, usuarios, logeado }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Usuarios!</Modal.Title>
            </Modal.Header>
            <Modal.Body>{logeado ? usuarios.map((e,indx)=>{
                    return <div className='nombre-usuario' key={indx}>{e.email}</div> }) : ""}</Modal.Body>

        </Modal>
    )
}

export default Usuarios
