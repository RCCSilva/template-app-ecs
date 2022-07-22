"use strict";

import express from "express"

const APP_NAME = process.env.APP_NAME || ''
const BASE_URL = `/${APP_NAME}`

const app = express()
const port = 3000

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send({ status: 'ok', message: 'Root of service!', name: APP_NAME })
})

router.get('/health', (req, res) => {
  res.status(200).send({ status: 'ok', message: 'Service is health!' })
})

app.use(BASE_URL, router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})