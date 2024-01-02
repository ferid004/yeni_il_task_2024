import express from 'express';
import AuthMiddleware from '../middleware/authmiddleware.js';
import {get_all,delete_by_id} from "../controller/usercontroller.js"

const router=express.Router()


router.get('/all', AuthMiddleware,get_all)

router.delete('/:id',AuthMiddleware,delete_by_id)


export default router