const {Schema, model}= require("mongoose")

const ownerSchema = new Schema({
    description: {
        type: Text,
        required: true,
        maxlength: 1200
    }
})

const Owner = model("Owner", ownerSchema)

module.exports = Owner