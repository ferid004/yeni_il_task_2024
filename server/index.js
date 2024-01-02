import express from 'express'
import mongoose from 'mongoose';
// fech atmaq ucun cors
import cors from "cors"
// dotenv imprort
import dotenv from 'dotenv'

// import jwt 
import jwt from 'jsonwebtoken';
import user from './src/models/userSchema.js';

// userRouter import
import userRouter from './src/router/userRouter.js';

// authRouter import
import authRouter from './src/router/authrouter.js';

const app = express()

// json formatina kecirmk
app.use(express.json())

// cors u isledek 
app.use(cors())

// dotenv conffiq etmek
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    try {
        const users = await user.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.use('/' ,userRouter)
app.use('/' ,authRouter)

app.post('/register', async (req, res) => {
    try {
        const newuser = new user(req.body)
        await newuser.save()
        //  jwt tuken gonderioriki burda username yerine bizim req.body den usernameni alir ve secretkey
        const token = jwt.sign({ username: newuser.username }, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.status(200).send(token)

    } catch (error) {
        res.status(400).send(error.message)
    }
})
app.post('/login', async (req, res) => {
    try {
        const login_olunmus_user = await user.findOne({ username: req.body.username })
        if (!login_olunmus_user) {
            res.status(401).send("user sehdi")
            return
        }
        if (login_olunmus_user.password !== req.body.password) {
            res.status(401).send("password sehdi")
            return
        }
        const token = jwt.sign({ username: login_olunmus_user.username, role: login_olunmus_user.role },
            process.env.SECRET_KEY, { expiresIn: "1h" })

        res.status(200).send(token)
    }

    catch (error) {
        res.status(400).send(error.message)
    }
})





mongoose.connect(process.env.DB_CONNET)
    .then(() => console.log("db connet sucressful"))
    .catch(() => console.log("not connet"))


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})