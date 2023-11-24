import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import Mail from './mail.js'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.json())

app.get('/', (req, res) => res.send(`<h1>Hello World</h1>`))

app.post('/mail', async (req, res) => {
  const { message } = req.body
  return res.json({ result: await Mail.send(message) })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
