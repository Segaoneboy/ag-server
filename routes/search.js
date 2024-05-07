import {Router} from 'express'
import {search} from "../controllers/search.js";

const router = new Router()

router.get('/', search)

export default router