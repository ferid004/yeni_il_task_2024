import mongoose from 'mongoose';

// mungostda shemani import etmek
const { Schema } = mongoose;

// scheam yaratmak

const userSchema = new Schema({
    username: {
        type: String, unique: true, require: true
    },
    password: { type: String, require: true, minLength: 8 },
    role: { type: String, default: 'user', enum: ["admin", "user"] }
});
const user = mongoose.model('user', userSchema);
export default user