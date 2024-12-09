const express = require("express");
const cors = require("cors");

const path = require("path");
const app = express();
app.use(cors());

const initializeDbAndServer = async () => {
  app.listen(4000, () =>
    console.log(`Server Running At http://localhost:4000`)
  );
};

app.get("/", async (request, response) => {
  response.send("Hello");
});

initializeDbAndServer();

module.exports = app;
