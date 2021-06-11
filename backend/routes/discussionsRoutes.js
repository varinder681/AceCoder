import express from 'express'
import {submit,getAll} from '../controllers/discussionsControllers.js'

const router = express.Router();

router.post('/submit/:problemId',submit);
router.get('/getAll/:problemId',getAll)

export default router;