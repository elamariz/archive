import mongoose, { mongo } from "mongoose";

const proponentSchema = new mongoose.Schema({
    lastName: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        required: true
    }
})

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
    proponents: {
        type: [proponentSchema],
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    modifiedDate: {
        type: Date,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    keywords: {
        type: [keywordSchema],
        required: true
    }
}, {
    timestamps: true
})

const Project = mongoose.model('Project', projectSchema);

export default Project;