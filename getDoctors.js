const express = require("express");
const mongoose = require("mongoose");
const Doctor = require("./model_appoinment");

const app = express();
const port = 8000;

// MongoDB connection details
const dbName = "doctors_data";
const uri = `mongodb+srv://arjunmcan:1G0ikKPyL5Frmvzr@cluster0.cx1wg1f.mongodb.net/${dbName}`;

// Connect to MongoDB
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to DB");

        // Start server only after DB connection
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Connection failed", err);
    });

// Route to fetch and display doctor names
app.get("/appointments", async (req, res) => {
    try {
        const doctors = await Doctor.find();

       const html = 
       `
       <ul>
        ${doctors.map((dr)=>`<li>${dr.name}</li>`).join("\n")}
       </ul>
       `
        res.send(html);
    } catch (error) {
        console.error("Error fetching doctors:", error);
        res.status(500).send("Error fetching doctors");
    }
});
