import {Router} from 'express' 
import { getAI } from './controller.js'

const router = Router()

router.post('/chat', getAI)

export default router