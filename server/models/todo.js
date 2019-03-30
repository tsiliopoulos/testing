let mongoose = require('mongoose');

//create a todo model class
let todoSchema = mongoose.Schema({
    subject: {
        type: String,
        default: "",
        trim: true,
        required: "Subject is required"
    },
    description: {
        type: String,
        default: "",
        trim: true
    },
    category: {
        type: String,
        default: "",
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    collection: "todos"
})
module.exports = mongoose.model('test', todoSchema);