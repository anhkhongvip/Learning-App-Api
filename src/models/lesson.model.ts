import mongoose from 'mongoose';
const { Schema } = mongoose;

const lessonSchema = new Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    orderNo: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Lesson = mongoose.model('Lesson', lessonSchema);
export { Lesson };