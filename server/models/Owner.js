const {Schema, model}= require("mongoose")

const ownerSchema = new Schema({
    description: {
        type: String,
        required: true,
        maxlength: 1200
    }
})

const Owner = model("Owner", ownerSchema)

module.exports = Owner