const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Doctor = require("./models/appoinment")

const app = express()
const port = 8000

app.use(cors());


// MongoDB connection details
const dbName = "doctors_data"
const uri = `mongodb+srv://arjunmcan:1G0ikKPyL5Frmvzr@cluster0.cx1wg1f.mongodb.net/${dbName}`

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to DB")

    // Start server only after DB connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  })
  .catch((err) => {
    console.error("Connection failed", err)
  })


app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Route to fetch and display doctor names
app.get("/appointments", async (req, res) => {


  try {
    const doctors = await Doctor.find().sort({ _id: 1 });
    const html = `
  <div>
    <style>
      body {
        font-family: Consolas;
        background-color: #000;
      }
      .doctor-card {
        border: 1px solid #0f68e3ff;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 8px;
        background-color: #0f172a;
      }
      .doctor-info {
        margin-bottom: 10px;
        color: #fff;
      }
      .slots {
        margin-top: 10px;
        color: #fff;
      }
      .slot {
        border: 1px solid #fff;
        padding: 5px;
        margin: 3px 0;
        border-radius: 8px;
        background-color: #0f172a;
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
})

// Route to fetch a single doctor with id
app.get("/appointments/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const dr = await Doctor.find({ _id });

    if (dr.length === 0) {
      return res.status(404).send("Doctor not found");
    }

    const html = `
      <div>
        <style>
          body {
            font-family: Consolas;
            background-color: #000;
          }
          .doctor-card {
            border: 1px solid #0f68e3ff;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            background-color: #0f172a;
          }
          .doctor-info {
            margin-bottom: 10px;
            color: #fff;
          }
          .slots {
            margin-top: 10px;
            color: #fff;
          }
          .slot {
            border: 1px solid #fff;
            padding: 5px;
            margin: 3px 0;
            border-radius: 8px;
            background-color: #0f172a;
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

        ${dr.map(dr => `
          <div class="doctor-card">
            <div class="doctor-info">
              <strong>ID:</strong> ${dr._id}<br>
              <strong>Name:</strong> ${dr.name}<br>
              <strong>Speciality:</strong> ${dr.speciality}<br>
              <strong>Location:</strong> ${dr.location}
            </div>
            <div class="slots">
              <strong>Available Slots:</strong>
              <ul>
                ${dr.slots.map(slot => `
                  <li class="slot">
                    Time: ${slot.time} —
                    <span class="${slot.available ? 'available' : 'unavailable'}">
                      ${slot.available ? 'Available' : 'Unavailable'}
                    </span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    res.send(html);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).send("Error fetching doctors");
  }
});

//POST method works with postman 
app.post('/modify', async (req, res) => {
  const body = req.body;
  let count = await Doctor.countDocuments({}) + 1;

  try {
    const newDr = await Doctor.create({
      _id: `doc_0${count}`,
      name: body.name,
      speciality: body.speciality,
      location: body.location,
      slots: body.slots
    });
    console.log(body)
    return res.status(201).json({ msg: "New Doctor created", doctor: newDr });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create doctor", "details": err.message });
  }
});