import Card from 'react-bootstrap/Card'

import React from 'react'



const Pkmcard = ({ ejPokemon}) => {
    
   
    return (
        <Card className='m-2' style={{ width: '12rem' }}>
            <Card.Img variant="top" src={ejPokemon.sprites.front_default || ""} />
            <Card.Body>
                <Card.Title className='text-center nombre-pokemon'>{ejPokemon.name || ""}</Card.Title>
                <div className='d-flex justify-content-center'>
                {ejPokemon.types.map((type, index) => {
                    return <div className={type.type.name} key={index}>
                        {type.type.name}   
                        </div>
                }) || ""}
                </div>
                


            </Card.Body>
        </Card>
    )
}

export default Pkmcard
