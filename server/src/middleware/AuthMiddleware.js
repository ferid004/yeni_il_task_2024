// jwt ni import elemiyende olmur mwttleqdi
import jwt from 'jsonwebtoken';

const AuthMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decode=jwt.verify(token, process.env.SECRET_KEY);
        res.role=decode.role
        next()
     
    } catch (error) {
        res.status(400).send(error)
    }
}
export default AuthMiddleware