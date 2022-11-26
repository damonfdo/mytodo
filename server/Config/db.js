import dotenv from 'dotenv'
dotenv.config()

const db = process.env.MONGO_URI

export default db
