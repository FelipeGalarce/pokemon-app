import Container from 'react-bootstrap/Container'
import Boton from './Boton'
import Pkmcard from './Pkmcard'




const Principal = ({ ejPokemon, showModal, showModalCreate, logeado, pokemones, buscar, abrirUsers }) => {
    const missingNo = {
        name: "MissingNo",
        sprites: { front_default: "https://pm1.narvii.com/6401/61c75e3c02ebf7178cff4c6bf96168096e6ffaaf_hq.jpg" },
        types: [{ type: { name: "normal" } }]
    }

    return (
        <Container className='bg-light rounded mt-4'>
            <div className='text-center'>
                {logeado ? <h3 >Aca Puede Ver Tus Pokemon Favoritos!</h3> : <h3 >Crea tu Cuenta y Muestrale a los Demas Cuales son tus Pokemon Favoritos!</h3>}
                <h4>Recuerda que Solo Puede LLevar 6 contigo!</h4>
            </div>

            {logeado ? <div className='d-flex justify-content-center flex-wrap'>
                {pokemones.pokemon1[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon1[0]} />}
                {pokemones.pokemon2[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon2[0]} />}
                {pokemones.pokemon3[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon3[0]} />}
                {pokemones.pokemon4[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon4[0]} />}
                {pokemones.pokemon5[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon5[0]} />}
                {pokemones.pokemon6[0] === "" ? <Pkmcard ejPokemon={missingNo} /> : <Pkmcard ejPokemon={pokemones.pokemon6[0]} />}
            </div> 
            : <div className='d-flex justify-content-center flex-wrap'>
                {ejPokemon.map((pkm) => {
                    return <Pkmcard ejPokemon={pkm} key={pkm.name} />
                })}
            </div>}

            <div className='d-flex justify-content-center'>
                {logeado ? <div className='m-2'><Boton click={buscar} color="success" texto="Buscar"/></div> : <div className='m-2'><Boton color='success' click={showModal} texto="Inicia Sesion" /></div>}
                {logeado ? <div className='m-2'><Boton color='danger' texto="Conoce a los Demas!" click={abrirUsers} /></div> : <div className='m-2'><Boton color='danger' texto="Crea tu Cuenta" click={showModalCreate} /></div>}
                
            </div>

        </Container>
    )
}

export default Principal
