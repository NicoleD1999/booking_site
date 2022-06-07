const {Schema, model}= require("mongoose")

const userSchema = new Schema({
    first: {
        type: String,
        required: true,
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    booking: {
        type: Schema.Types.ObjectId,
        ref: "Booking"
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Notes"
    }]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
})

const User = model("User", userSchema)

module.exports = User