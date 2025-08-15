const mongoose = require("mongoose")

const AppointmentSchema = mongoose.Schema(
    {
        id: {
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
        slots: {
            type: Array,
            items: [
                {
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    },
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    },
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    },
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    },
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    },
                    type: Object,
                    properties: {
                        time: {
                            type: String,
                            required: true
                        },
                        available: {
                            type: Boolean,
                            required: true
                        }
                    }

                }
            ]
        }
    }
)

const Doctors = mongoose.model("Doctor", AppointmentSchema, "appointment")

module.exports = Doctors