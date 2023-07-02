require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const authRoutes = require("./routes/authRoutes");
const oAuthRoutes = require("./routes/oAuthRoutes");
const postRoutes = require("./routes/postRoutes");
const newsRoutes = require("./routes/newsRoutes");

const app = express();

app.use(express.json());

//Initializing Passport
app.use(passport.initialize());
//passport template
require("./config/passport");

//CORS Policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/news", newsRoutes);
app.use("/", oAuthRoutes);

// For any unknown API request
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(500).json({ message: error.message || "Something went wrong" });
});

//Setting up database and backend Server
const PORT = process.env.PORT || 8000;
const CONNECTION_URL = process.env.DB_URL;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error);
  });