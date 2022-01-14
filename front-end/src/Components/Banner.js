import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';
import Container from 'react-bootstrap/Container'




const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Container >
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-39.jpg"
                        alt="Nuevos Pokemons"
                        
                    />
                    <Carousel.Caption>
                        <h3>Nuevos Pokemons</h3>
                        <p>Nuevos Pokemons! Nuevas Aventuras!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-46.jpg"
                        alt="Pokemon atacando"
                    />

                    <Carousel.Caption>
                        <h3>Nuevos Misterios</h3>
                        <p>Resuelve nuevos Misterios junto con tus Amigos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://tcg.pokemon.com/assets/img/home/wallpapers/wallpaper-35.jpg"
                        alt="Tiranitar"
                    />

                    <Carousel.Caption>
                        <h3>Nuevos Enemigos!</h3>
                        <p>
                            Con nuevos Amigos Siempre Vendran Nuevos Enemigos!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Banner
