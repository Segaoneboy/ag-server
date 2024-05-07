import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    projectName: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

export default mongoose.model('User', UserSchema);
