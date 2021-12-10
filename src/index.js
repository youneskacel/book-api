import express from 'express'
import './DB/DB.js'
import 'dotenv/config'
import bookRouter from './Routes/bookRoutes.js'
import cors from 'cors'




const app = express()

app.use(cors())
app.use(express.json())
app.use(bookRouter)

const port = process.env.APP_PORT || 4200

app.listen (port , ()=> {
    console.log('Server connected on port : ',port)
})