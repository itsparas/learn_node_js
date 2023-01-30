const Express = require("express");

const app = Express();

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Server up and running");
});

app.listen(3000, () => {
  console.log("Server is listening at 3000");
});
