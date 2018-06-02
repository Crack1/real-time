"use strict"

const express = require('express')
const http = require('http')
const socketIo = require('socket.io')


const port = process.env.PORT || 3000
var app = express()

app.set('view engine', 'jade')
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send("Hello")
})

app.get('/home', (req, res) => {
  res.render("index", {
    title: "title"
  })
})


const server = new http.Server(app)
const io = socketIo(server)

io.on('connection', (socket) => {
  console.log(`Client Conected`)
})

server.listen(port, () => {
  console.log(`Server is running in port ${port}`)
})
