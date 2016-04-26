import http from 'http'
import express from 'express'
import mongoose { connection } from 'mongoose'

var db = connection

var config = {
  mongoose: {
    databaseUrl: 'mongodb://localhost/pcv'
  }
}

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGOLAB_URI || config.mongoose.databaseUrl)


app.use(express.static('public'))

server.listen(port, () => console.log(`Server listening on port ${port}`))
