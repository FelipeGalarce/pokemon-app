import Offcanvas from 'react-bootstrap/Offcanvas'
import Boton from './Boton'
import Pkmcard from './Pkmcard'

import { useState } from 'react'

const SideSearch = ({show, handleClose, noEncontrado, buscar, pokemonEncontrado, resultado, agregar}) => {
    const [search, setSearch] = useState("");
    


    const onChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) {
          buscar(null);
        }
    };
    const onClick = async () => {
        await buscar(search);
    };



    return (
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Busca Tus Pokemon</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
              <div className='d-flex justify-content-center'>
                  <input className='me-2' onChange={onChange} type="text" />
                  <Boton  texto="Buscar" click={onClick} color="success"/>
              </div>
              <div>
                {noEncontrado ? <div>Pokemon no Encontrado...</div>: ""}    
                {resultado ? <div className='d-flex flex-column align-items-center'><Pkmcard ejPokemon={pokemonEncontrado}/><Boton color="success" texto="Agregar" click={agregar}/></div> : ""}

              </div>  
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    )
}

export default SideSearch
