import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import regRoute from './routes/register.js'
import searchRoute from './routes/search.js'
import infoRoute from './routes/info.js'

const app = express()
dotenv.config()

const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


app.use(cors())
app.use(express.json())

app.use('/api/register', regRoute )
app.use('/api/search', searchRoute )
app.use('/api/info', infoRoute )
app.use('/uploads', express.static('uploads'))

async function start(){
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.qvnnotz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    } catch(error){
        console.log(error)
    }
}
start()