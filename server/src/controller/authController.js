import user from '../models/userSchema.js';
import jwt from 'jsonwebtoken';

export const post_register = async (req, res) => {
    try {
        const newuser = new user(req.body)
        await newuser.save()
        //  jwt tuken gonderioriki burda username yerine bizim req.body den usernameni alir ve secretkey
        const token = jwt.sign({ username: newuser.username ,role:newuser.role}, process.env.SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json(token)

    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const post_login = async (req, res) => {
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
        const token =await jwt.sign({ username: login_olunmus_user.username, role: login_olunmus_user.role },
            process.env.SECRET_KEY, { expiresIn: "1h" })

        res.status(200).send(token)
    }

    catch (error) {
        res.status(400).send(error.message)
    }
}