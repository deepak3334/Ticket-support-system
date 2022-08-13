import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 10
    },
   
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
});

const admin = mongoose.model('user', adminSchema);

export default admin;