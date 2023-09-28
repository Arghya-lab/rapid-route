require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");
const auth = require("./middleware/auth");
const { signup, login } = require("./controllers/auth");
const { generateShortUrl } = require("./controllers/urlShorten");
const { redirectToUrl } = require('./controllers/redirectToUrl');
const { analytics } = require("./controllers/analytics");

/* config */
const app = express();
const port = process.env.PORT;
app.use(express.json());

/* connect with db */
connectToMongo();


/* Routes */

// Auth routs
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);
//  generate short URL
app.post("/api/urlShorten/", auth, generateShortUrl);
// use shortURL
app.get("/:shortId", redirectToUrl);
//  get short URL analytics
app.post("/api/analytics/", analytics);


/* start server */
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
