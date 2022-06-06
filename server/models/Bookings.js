const {Schema, model} = require("mongoose")

const bookingSchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Booked"
    }
})

const Booking = model("Booking", bookingSchema)

module.exports = Booking;