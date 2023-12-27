import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    nim:{
        type: String,
        required: true
    },
    kelas:{
        type: String,
        required: true
    },
    major:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    }
});

export default mongoose.model('Users', User);