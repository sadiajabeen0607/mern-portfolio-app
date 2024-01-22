const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const portfolieRoute = require("./routes/portfolioRoute");

//dotenv Configuration
dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/portfolio", portfolieRoute);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
