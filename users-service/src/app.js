const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Users service rodando na porta ${PORT}`))
