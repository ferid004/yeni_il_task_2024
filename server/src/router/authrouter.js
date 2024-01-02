import express from 'express';
import {post_register,post_login} from "../controller/authController.js"

const router=express.Router()


router.post('/register',post_register )

router.post('/login',post_login)


export default router