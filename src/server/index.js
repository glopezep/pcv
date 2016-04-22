import http from 'http'
import express from 'express'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.use(express.static('public'))

server.listen(port, () => console.log(`Server listening on port ${port}`))