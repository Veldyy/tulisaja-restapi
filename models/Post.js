const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        ref:'User',
        require: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null 
    },
}, {
    versionKey: false
})

module.exports = mongoose.model('Post', postSchema, 'post')