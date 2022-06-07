const {Schema, model} = require("mongoose")

const propertySchema = new Schema({
    description: {
        type: String,
        required: true,
        maxlength: 800
    }
})

const Property = model("Property", propertySchema)

module.exports = Property