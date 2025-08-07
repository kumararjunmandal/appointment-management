
const { MongoClient, ServerApiVersion } = require('mongodb');
//use('mongodbVSCodePlaygroundDB');
const uri = "mongodb+srv://arjunmcan:1G0ikKPyL5Frmvzr@cluster0.cx1wg1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("doctors_data").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("doctors_data");
    const doctors = db.collection('doctors');
    const appointmentTable = db.collection('availabilityTable');
    
    console.log(await appointmentTable.aggregate([
      {
        $lookup : {
          from: "doctors",
          localField: "Name",
          foreignField: "Name",
          as: "doctorId"
        }
      }
    ]).toArray());
    //console.log('collection.countDocuments()',await appointmentTable.find({ speciality : "Orthopedic Surgeon"}).toArray() , await collection.distinct());


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
