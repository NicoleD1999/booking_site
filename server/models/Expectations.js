const {Schema, model} = require("mongoose")

const expectationsSchema = new Schema({
    description: {
        type: String,
        required: true,
        maxlength: 1000
    }
})

const Expectations = model("Expectations", expectationsSchema)

module.exports = Expectations