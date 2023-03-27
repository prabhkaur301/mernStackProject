const express = require("express");
const app = express();
const path = require("path");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { logger } = require("./middlewares/logger");
const { errorHandler } = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 5000;

//cors to share resources across cross origin
app.use(cors(corsOptions));
// custom middleware
app.use(logger);
// built in middleware which will add ability to handle json
app.use(express.json());
// third party to manage cookies
app.use(cookieParser());

// _dirname is a global variable in node
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/root"));

// handling 404 requests
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

app.use(errorHandler);
app.listen(PORT, () =>
  console.log(`Server running successfully on PORT ${PORT}`)
);
