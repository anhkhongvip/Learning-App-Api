import mongoose from 'mongoose';
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    enrolledAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});


const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
export { Enrollment };