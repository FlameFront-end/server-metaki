import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import Mail from './mail.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send(`<h1>Hello World</h1>`))

app.post('/mail', async (req, res) => {
  const { message } = req.body
  return res.json({ result: await Mail.send(message) })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
