const express = require('express');
const cors = require('cors');
require("dotenv").config({ path: ".env" });

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders:
      "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
  })
  
  );
  app.use("/api", (req, res) => {
    console.log("it's working");
    res.send('success received!') 
  });
  app.listen(process.env.PORT, () => {
    console.log("Port: ", process.env.PORT)
    console.log('Server started!');
    });

    module.exports = app