require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const { request } = require('http')
const methodOverride = require('method-override');




//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())


// use methodOverride middleware
app.use(methodOverride('X-HTTP-Method-Override'));



const home = require('./Routes/routes')

app.use('/', home)


app.get('/', (req,res) => {
    res.json({message:"wellcome"})
})

const port = 3000

app.listen(port, () => {
    console.log("Connected in port: ",port);
})

