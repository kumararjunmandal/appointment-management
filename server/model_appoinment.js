const mongoose = require("mongoose")

const AppointmentSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        speciality: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        slots: [
            {
                time: {
                    type: String,
                    required: true,
                },
                available: {
                    type: Boolean,
                    required: true,
                },
            }
        ]
    }, { _id: false, versionKey: false }
)

const Doctor = mongoose.model("Doctor", AppointmentSchema, "appointment")

module.exports = Doctor