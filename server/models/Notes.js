const {Schema, model}= require("mongoose")

const notesSchema= new Schema({
    body: {
        type: String,
        required: true,
        maxlength: 60
    }
})

const Notes = model("Notes", notesSchema)

module.exports = Notes

