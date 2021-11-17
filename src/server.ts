require('dotenv').config()

import http from "http"
const router = require('./app')

// server
const httpServer = http.createServer(router)
const PORT:any = process.env.PORT
httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
