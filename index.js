// load env contents to process.env by default

require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./Routes/Router')

require('./db/connection')
// create an express application

const carServer = express()

carServer.use(cors())
carServer.use(express.json())
carServer.use(router)
const PORT = 4000 || process.env.PORT

carServer.listen(PORT,()=>{
    console.log(`Car Server Started At Port ${PORT} and waiting for client request!!`);
})

// http get request  resolving to http://localhost:4000/

carServer.get('/',(req,res)=>{
    res.send(`<h1>Car Server started and waiting for client request !!</h1>`)
})