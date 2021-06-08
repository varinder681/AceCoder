import express from 'express'
const router = express.Router()

import {customInputEvaluate,execute} from '../controllers/codeExecutionControllers.js'

router.post('/execute/:problemId', customInputEvaluate)
router.post('/execute/',execute)


export default router