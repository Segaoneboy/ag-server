import {Router} from 'express'
import {register} from "../controllers/reg.js";
import multer from 'multer'

const storage = multer.diskStorage({
    destination:(_,__,cb) =>{
        cb(null, 'uploads')
    },
    filename:(_,file, cb) =>{
        cb(null, file.originalname);
    },
});
const upload = multer({storage});


const router = new Router()

router.post('/', upload.single('image'), register)

export default router