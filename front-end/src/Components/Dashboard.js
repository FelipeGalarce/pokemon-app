import Container from 'react-bootstrap/Container'

import Pkmcard from './Pkmcard'


const Dashboard = (props) => {
    const {misPokemon} = props
    return (
        <Container>
            <h2>Tus Pokemon!</h2>
            <div>
                {
                    misPokemon ?
                    misPokemon.map((pkm)=>{
                        return <Pkmcard ejPokemon={pkm}/>
                    }):
                    <div>
                    <h4>Aun no has Agregado ningun Pokemon...Usa el Boton Buscar Para Agregarlos!</h4>
                    
                    </div>
                }
            </div>

        </Container>
    )
}

export default Dashboard
