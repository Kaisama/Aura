import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    birthDate: {
        day:{
            type: Number,
            required: true
        },
        month:{
            type: Number,
            required: true
        },
        year:{
            type: Number,
            required: true
        }
    }
}, {timestamps: true})

const User = mongoose.model("Users", userSchema);

export default User;
