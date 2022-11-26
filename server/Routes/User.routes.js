import express from 'express'
import { signIn, signUp } from '../Controllers/User.controller.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/singin', signIn)


export default router