require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");
const authRoute = require("./routes/auth");
const urlShortenRoute = require("./routes/urlShorten");
const redirectToUrlRoute = require("./routes/redirectToUrl");
const analyticsRoutes = require("./routes/analytics");

/* config */
const app = express();
const port = process.env.PORT;
app.use(express.json());

/* connect with db */
connectToMongo();

/* Routes */
app.use("/api/auth", authRoute);
app.use("/api/urlShorten", urlShortenRoute);
app.use("/", redirectToUrlRoute);
app.use("/api/analytics", analyticsRoutes);


/* start server */
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
