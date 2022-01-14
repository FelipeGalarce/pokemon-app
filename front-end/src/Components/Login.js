import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import Boton from './Boton'


const Login = ({primerInput, segundoInput, uso, textoBoton, logear}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length === 0) {
          logear(null);
        }
    };


    const onChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length === 0) {
          logear(null);
        }
    };

    const onClick = async () => {
        let datos = {email: email, password: password}
        await logear(datos);
    };


    return (
        <Container className="bg-light d-flex justify-content-center align-items-center ">

            
            <div className='login text-center'>
            <h2>{uso}</h2>
                <div className='d-flex justify-content-center flex-column'>
                <input onChange={onChangeEmail} type="text" placeholder={primerInput} />
                <input onChange={onChangePassword} type="password" placeholder={segundoInput} />
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='m-2'><Boton color='success' click={onClick} texto={textoBoton}/></div>
                </div>
            </div>
        </Container>
    )
}

export default Login
