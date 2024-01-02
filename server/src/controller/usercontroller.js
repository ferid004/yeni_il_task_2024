// schemanida import etmek lazmidi
import user from '../models/userSchema.js';

export const get_all = async (req, res) => {
    try {
        const users = await user.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const delete_by_id = async (req, res) => {
    const { id } = req.params
    console.log(res.role);
    if (res.role !== 'admin') {
        res.status(403).send('pis user sen bunu sile bilmesen');
        return
    }

    try {
        const users = await user.findByIdAndDelete(id)
        res.status(200).send(users)
    }
    catch (error) {
        res.status(400).send(error.message)
    }
}
