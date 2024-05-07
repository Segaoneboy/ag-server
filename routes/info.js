import {Router} from 'express'
import {info} from "../controllers/info.js";

const router = new Router()

router.get('/', info)

export default router