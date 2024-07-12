const { app, port, router } = require("./app/server.js");

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on Port: ${port}`);
});

module.exports = app;
