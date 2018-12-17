const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const app = express();

//Body Parse Middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World"));

// Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
