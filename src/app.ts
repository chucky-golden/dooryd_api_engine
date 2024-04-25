require('dotenv').config()
import express from "express"
import cors from 'cors'
import proxy from 'express-http-proxy'

const PORT: any = process.env.PORT
const app: any = express()


app.use(cors())


app.use('/drivers/api/v1', proxy('https://dooryd-drivers-api.onrender.com'))
app.use('/users/api/v1', proxy('https://admin-dqcw.onrender.com'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`gateway running... on port ${PORT}`)
})