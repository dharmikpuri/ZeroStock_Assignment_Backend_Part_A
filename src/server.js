const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const searchRoutes = require("./routes/search.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", searchRoutes);
connectDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});