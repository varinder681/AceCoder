import express from 'express'
const router = express.Router()

import {execute} from '../controllers/codeExecutionControllers.js'

router.post('/execute', execute)

export default router