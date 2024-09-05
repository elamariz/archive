import mongoose, { mongo } from "mongoose";

const keywordSchema = new mongoose.Schema({
    keyword: {
        type: String,
        require: true
    },
})

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    proponents: [
        {
            lastName: {
                type: String,
                required: true
            },
            firstName: {
                type: String,
                required: true
            },
        }
    ],
    publishedDate: {
        type: Date,
        required: true
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    },
    abstract: {
        type: String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
})

const Project = mongoose.model('Project', projectSchema);

export default Project;