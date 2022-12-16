const express = require('express')
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
const bodyparser = require("body-parser")
const path = require('path')

const connectDB = require('./server/database/connection');

// le projet se lance sur le port 3000 par defaut si celui-ci est occupé, il se lance sur le 8080
dotenv.config({path:'config.env'})
const PORT = 3000 || 8080

// connection bd mongo
connectDB();

app.use(express.urlencoded({
    extended: true
}))

// log request
app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({
    extended: true
}))

app.set("view engine","ejs")

//charger les assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// charger les routes
app.use('/', require('./server/routes/routerUser'))
app.use('/', require('./server/routes/routerPlaylist'))
app.use('/', require('./server/routes/routerSong'))

app.listen(PORT,()=>{console.log("server running")})