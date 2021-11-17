import express, { Express } from "express"

import morgan from "morgan"
import cors from "cors"

const router:Express = express()

// logging
router.use(morgan("dev"))

// parse request
router.use(express.urlencoded({ extended: false }))

// take care of JSON data
router.use(express.json())

// use cors
router.use(cors())

// routes
router.use("/", require('./routes/books'))
router.get('/', (req, res) => {
  res.send('hello world')
})

// handle error
router.use((req, res, next) => {
  const error = new Error("not found")
  return res.status(404).json({
    message: error.message,
  })
})

module.exports = router