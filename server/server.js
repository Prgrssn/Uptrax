const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const areasRoutes = require("./routes/areas");
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/v1/areas", areasRoutes);

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
