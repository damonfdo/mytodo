import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'


import db from './Config/db.js'

// Fetch custom route files 
import userRoutes from './Routes/User.routes.js'
import mongoose from 'mongoose'

// confifgure express 
const app = express()
app.use(bodyParser.json({ limit: '15mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }))
app.use(cors())


// Add Routes to express app 
app.use('/user', userRoutes)

//Define Port
const PORT = process.env.PORT || 3000


// Establish DB connection  and listen on server
mongoose.connect(db)
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(`Could not connect: ${error.message} `))

