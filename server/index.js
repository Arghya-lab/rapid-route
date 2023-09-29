require("dotenv").config();
const express = require("express");
const cors = require('cors')
const connectToMongo = require("./db");
const auth = require("./middleware/auth");
const { signup, login } = require("./controllers/auth");
const { generateShortUrl } = require("./controllers/urlShorten");
const { redirectToUrl } = require('./controllers/redirectToUrl');
const { analytics } = require("./controllers/analytics");

/* config */
const app = express();
const port = process.env.PORT;
app.use(cors())
app.use(express.json());

/* connect with db */
connectToMongo();


/* Routes */

//  Auth routs
app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);
//  generate short URL
app.post("/api/urlShorten/", auth, generateShortUrl);
//  get short URL analytics
app.get("/api/analytics/:shortId", auth, analytics);
// use shortURL
app.get("/:shortId", redirectToUrl);


/* start server */
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
