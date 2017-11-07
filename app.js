const express = require('express');
const routes = require("./routes");
const app = express();

app.use(routes);

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`This is an express calculator on port: ${PORT}`);
})

//
