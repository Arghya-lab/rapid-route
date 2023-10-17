require("dotenv").config();
const express = require("express");
const cors = require('cors')
const connectToMongo = require("./db");
const auth = require("./middleware/auth");
const { signup, login } = require("./controllers/auth");
const { generateShortUrl, deleteShortUrl } = require("./controllers/urlShorten");
const { redirectToUrl } = require('./controllers/redirectToUrl');
const { analytics } = require("./controllers/analytics");
const { getShortUrl, getShortUrls } = require("./controllers/getShortUrls");

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
app.post("/api/urlShorten", auth, generateShortUrl);
//  delete short URL
app.delete("/api/urlShorten", auth, deleteShortUrl);
//  get  shortUrl info
app.get("/api/url/:shortId", auth, getShortUrl)
//  get all short url list
app.get("/api/urls", auth, getShortUrls)
//  get short URL analytics
app.get("/api/analytics/:shortId", auth, analytics);
// use shortURL
app.get("/:shortId", redirectToUrl);


/* start server */
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
