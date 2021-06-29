const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    order: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mp: {
        type: Number,
        required: true
    },
    w: {
        type: Number,
        require: true
    },
    l: {
        type: Number,
        require: true
    },
    gf: {
        type: Number,
        require: true
    },
    ga: {
        type: Number,
        require: true
    },
    pts: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Model', modelSchema);