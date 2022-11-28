import express from 'express'
import { getStatus } from '../Controllers/Status.controller.js'

const router = express.Router()

router.get('/', getStatus)

export default router