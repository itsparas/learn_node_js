const User = require("../models/todo");

const saveUser = (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
  });
  user.save((err) => {
    if (err) res.send(err);
    else {
      res.send({ message: "Added to database" });
    }
  });
};

module.exports = saveUser;
