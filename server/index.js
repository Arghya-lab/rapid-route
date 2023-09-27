require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");
const authRoute = require("./routes/auth");
const urlRoute = require("./routes/url");

/* config */
const app = express();
const port = process.env.PORT;
app.use(express.json());

/* connect with db */
connectToMongo();

/* Routes */
app.use("/api/auth", authRoute);
app.use("/api/url", urlRoute);

/* start server */
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
