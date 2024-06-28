const mongoose = require('mongooose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    tag:{
        type: Date,
        default: "General"
    }
})

module.exports = mongoose.modal('Notes', NotesSchema);