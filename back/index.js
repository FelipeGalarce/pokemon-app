const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const PostUser = require('./models/usuarios')
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const llaveSecreta = "una llave muy secreta"

app.use(session({
    key: "userId",
    secret: llaveSecreta,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 300*1000 }
  }))



app.get('/users', async (req, res) => {
    try {
        const allUsers = await PostUser.find();
        res.json(allUsers)
    } catch (err) { res.json({ mensaje: err }) }
})


app.post('/post', async (req, res) => {


    const usuario = req.body.user
    const postUser = new PostUser({
        email: usuario.email,
        password: usuario.password,
        pokemon1: usuario.pokemon1 || "",
        pokemon2: usuario.pokemon2 || "",
        pokemon3: usuario.pokemon3 || "",
        pokemon4: usuario.pokemon4 || "",
        pokemon5: usuario.pokemon5 || "",
        pokemon6: usuario.pokemon6 || ""
    })
    try {
        await postUser.save()
        res.sendStatus(201)
    } catch (err) { res.json({ mensaje: err }) }

})

app.post('/agregarpokemon', async (req,res)=>{
    const credenciales=  req.body.credenciales
    const pokemon = req.body.pokemon[0]
    const previo = await PostUser.find({email: credenciales.email, password: credenciales.password})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon2: previo[0].pokemon1[0]})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon3: previo[0].pokemon2[0]})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon4: previo[0].pokemon3[0]})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon5: previo[0].pokemon4[0]})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon6: previo[0].pokemon5[0]})
    await PostUser.findOneAndUpdate({ email: credenciales.email, password: credenciales.password }, {pokemon1: pokemon})
    const nuevo = await PostUser.find({email: credenciales.email, password: credenciales.password})
    res.send(nuevo)
    
})

app.post('/login', async (req, res) => {
    const datos = req.body.user
    

    const verificar = await PostUser.find({ email: datos.email, password: datos.password })
    if (verificar.length > 0) {
        req.session.user = verificar;
        res.send(verificar)
    } else {
        res.status(404).send({
            error: "Usuario no Resgistrado",
            code: 401
        })
    }



})




mongoose.connect("mongodb+srv://FelipeGalarce:felipegalarce@cluster0.uvooj.mongodb.net/felipegalarce?retryWrites=true&w=majority", () => {
    console.log("conectado")
})

app.listen(PORT, () => console.log("Server On" + PORT))