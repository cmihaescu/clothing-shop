const https = require("https");
const createHttpError = require("http-errors");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes

const createOrderRouter = require("./routes/revolut-router");

app.use("/createOrder", createOrderRouter);

app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post("/registration", (req, res) => {
  console.log(req.body);
  res.json({ test: "test" });
});

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const PORT = process.env.PORT || 4000;
https
  .createServer(options, app)
  .listen(PORT, console.log(`server runs on port ${PORT}`));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
