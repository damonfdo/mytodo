
import md5 from 'md5'
import jwt from 'jsonwebtoken'
import User from '../Models/User.js'
import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.env.SECRET


// TODO 

// Implement Migration 

export const signUp = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(409).json({ message: 'Please Enter Username and Passowrd' })
    }

    const { name, email, password } = req.body
    try {
        // Check if user already exists  
        const user = await User.findOne({ email: req.body.email })

        // Create new user if not exists 
        if (!user) {

            //True => Passing is verified to be true
            const newUser = new User({ name, email, password: md5(password), is_verified: true })
            await newUser.save()

            return res.status(201).json(newUser)
        } else {
            return res.status(201).json({ message: 'User already exisits. Please log in' })
        }
    } catch (error) {
        return res.status(409).json({ message: error.message })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' })
    }
    try {
        const user = await User.findOne({ email: email })

        // If no user present 
        if (!user) {
            // TODO  Add signin redirection
            return res.status(404).json({ message: 'User  not found, please sign up' })
        }

        // verify password  
        const hashPassword = user.password === md5(password)

        if (!hashPassword) {

            // Wrong Password 
            return res.status(400).json({ message: 'Invalid email or pasword. Please try again later' })
        } else {

            // Create a token 
            const token = await jwt.sign({ email: user.email }, SECRET)

            return res.status(201).json(token)
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })

    }
}