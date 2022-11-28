import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Import cors 
import corsOptions from './Config/corsOption.js'
// Fetch custom route files 
import userRoutes from './Routes/User.routes.js'
import taskRoutes from './Routes/Task.routes.js'


// confifgure express 
const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors(corsOptions))

// Add Routes to express app 
app.use('/user', userRoutes)
app.use('/task', taskRoutes)

export default app