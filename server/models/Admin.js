const {Schema, model} = require("mongoose")

const adminSchema = new Schema ({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone_number: {
        type: Number,
    }
})

const Admin = model("Admin", adminSchema)

module.exports = Admin;