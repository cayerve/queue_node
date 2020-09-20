//This is the entry point
require('dotenv').config()
const { config:{port}} = require("./config")
const express = require('express')
const app = express();  //Server va a recibir el app y el puerto (que esta en carpeta config)
const {bar} = require('./queues')

require('./server')(app, port)

