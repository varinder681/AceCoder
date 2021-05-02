import express from 'express'
import {getProblem, submit} from '../controllers/createProblemControllers.js'

const router = express.Router()

router.post('/submit',submit)

router.post('/get-problem',getProblem)

export default router