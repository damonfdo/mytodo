import mongoose from 'mongoose'
import app from './app.js'
import db from './Config/db.js'

//Define Port
const PORT = process.env.PORT || 3001


// Establish DB connection  and listen on server
mongoose.connect(db)
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(`Could not connect: ${error.message} `))

