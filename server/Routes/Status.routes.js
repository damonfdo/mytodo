import express from 'express'
import { getStatus } from '../Controllers/Status.controller.js'
import { isLoggedIn } from '../Middleware/authJWT.middleware.js'
const router = express.Router()

router.get('/', isLoggedIn, getStatus)

export default router