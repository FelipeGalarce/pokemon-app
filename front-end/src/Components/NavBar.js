import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'






import React from 'react'

const NavBar = () => {
    return (
        <Navbar  bg="dark" variant='dark'  expand="lg">
            <Container>
                <Navbar.Brand href="#">PokeTodos!</Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default NavBar
