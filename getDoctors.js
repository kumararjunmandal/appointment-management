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
    const html = `
  <div>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .doctor-card {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
        background-color: #f4f4f4;
      }
      .doctor-info {
        margin-bottom: 10px;
      }
      .slots {
        margin-top: 10px;
      }
      .slot {
        padding: 5px;
        margin: 3px 0;
        border-radius: 4px;
        background-color: #e0e0e0;
      }
      .available {
        color: green;
        font-weight: bold;
      }
      .unavailable {
        color: red;
        font-weight: bold;
      }
    </style>
    ${doctors.map((dr) => `
      <div class="doctor-card">
        <div class="doctor-info">
          <strong>ID:</strong> ${dr.id}<br>
          <strong>Name:</strong> ${dr.name}<br>
          <strong>Speciality:</strong> ${dr.speciality}<br>
          <strong>Location:</strong> ${dr.location}
        </div>
        <div class="slots">
          <strong>Available Slots:</strong>
          <ul>
            ${dr.slots.map(slot => `
              <li class="slot">
                Time: ${slot.time} 
                —<span class="${slot.available ? 'available' : 'unavailable'}">
                  ${slot.available ? 'Available' : 'Unavailable'}
                </span>
              </li>
            `).join("")}      
          </ul>
        </div>
      </div>
    `).join("")}
  </div>
`

    res.send(html);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).send("Error fetching doctors");
  }
});
