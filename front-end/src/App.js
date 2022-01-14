import axios from 'axios'

//componentes
import ModalPop from "./Components/ModalPop";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import Principal from "./Components/Principal";
import ModalCrear from "./Components/ModalCrear";
import SideSearch from "./Components/SideSearch"


import { useState, useEffect } from "react";
import { getPokemons, getPokemonsData, buscarPokemon } from './api';
import Usuarios from './Components/Usuarios';




function App() {
  const [ejPokemon, setEjPokemon] = useState([])
  const [showLogin, setShowLogin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showSideSearch, setShowSideSearch] = useState(false);
  const [pokemonEncontrado, setPokemonEncontrado] = useState([]);
  const [pokemonNoEncontrado, setPokemonNoEncontrado] = useState(false);
  const [resultado, setResultado] = useState(false)
  const [logeado, setLogeado] = useState(false)
  const [credenciales, setCredenciales] = useState([])
  const [usuarios, setUsuarios] = useState([])


  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseUsers = () => setShowUsers(false);
  const handleShowUsers = () => setShowUsers(true);
  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);
  const handleCloseSideSearch = () => setShowSideSearch(false);
  const handleShowSideSearch = () => setShowSideSearch(true);




  const buscando = async (pokemon) => {
    const result = await buscarPokemon(pokemon)
    if (result) {
      setPokemonEncontrado(result)
      setResultado(true)
    } else {
      setPokemonNoEncontrado(true)
    }
  }

  const crearCuenta = async (user) => {
    axios.post('http://localhost:3001/post', { user })
      .then(setShowCreate(false))
      .then(alert("usuario Creado!, ahora Inicia Sesion!"))
  }

  const pokemonParaAgregar = []

  const agregarPokemon = async () => {
    let plantilla = ""
    
    if (!pokemonEncontrado.types[1]) {
      plantilla = {
        name: pokemonEncontrado.name,
        sprites: { front_default: pokemonEncontrado.sprites.front_default },
        types: [{ type: { name: pokemonEncontrado.types[0].type.name } }]
      }
    }else {
      plantilla = {
        name: pokemonEncontrado.name,
        sprites: { front_default: pokemonEncontrado.sprites.front_default },
        types: [{ type: { name: pokemonEncontrado.types[0].type.name } }, { type: { name: pokemonEncontrado.types[1].type.name } }]
      }
    }

    pokemonParaAgregar.push(plantilla)
    const datos = { credenciales: credenciales, pokemon: pokemonParaAgregar }
    axios.post('http://localhost:3001/agregarpokemon', datos)
      .then(data => {
        const guardado = data.data[0]
        setCredenciales(guardado)
        setShowSideSearch(false)
        alert("Pokemon Agregado!")
      })
  }


  const logear = async (user) => {
    await axios.post('http://localhost:3001/login', { user })
      .then(data => {
        var guardados = data.data[0]
        setCredenciales(guardados)
        setLogeado(true)
        setShowLogin(false)
      })
      .catch(err => {
        alert("Usuario no existe")
        setShowLogin(false)
      })
    await axios.get("http://localhost:3001/users")
    .then(data=>{
      setUsuarios(data.data)
    })
  }

  const detalles = async () => {
    const data = await getPokemons()
    const result = await Promise.all(data.results.map(async (pkm) => {
      return await getPokemonsData(pkm.url)
    }))
    setEjPokemon(result)
  }

  useEffect(() => {
    detalles()
  }, [])



  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Principal abrirUsers={handleShowUsers} buscar={handleShowSideSearch} pokemones={credenciales} logeado={logeado} showModalCreate={handleShowCreate} showModal={handleShowLogin} ejPokemon={ejPokemon} />
      <ModalPop logear={logear} clickCerrar={handleCloseLogin} show={showLogin} handleClose={handleCloseLogin} />
      <ModalCrear crear={crearCuenta} clickCerrar={handleCloseCreate} show={showCreate} handleClose={handleCloseCreate} />
      <SideSearch agregar={agregarPokemon} resultado={resultado} pokemonEncontrado={pokemonEncontrado} noEncontrado={pokemonNoEncontrado} buscar={buscando} show={showSideSearch} handleClose={handleCloseSideSearch} />
      <Usuarios logeado={logeado} usuarios={usuarios} show={showUsers} handleClose={handleCloseUsers} />
    </div>
  );
}

export default App;
