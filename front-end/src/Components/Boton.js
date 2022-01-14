import Button from 'react-bootstrap/Button'

import React from 'react'

const Boton = ({texto, color, click}) => {
    return (
        <Button onClick={click} variant={color}>{texto}</Button>
    )
}

export default Boton
