import mongoose from 'mongoose';
const { Schema } = mongoose;

const progressSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Date,
    },
}, {
    timestamps: true,
});


const Progress = mongoose.model('Progress', progressSchema);
export { Progress };