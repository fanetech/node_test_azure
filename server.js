const express = require('express');
const cors = require('cors');

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
  app.listen(3002, () => {
    console.log('Server started!');
    });