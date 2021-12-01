const knex = require("knex")(require("../knexfile").development);

exports.getUsers = (_req, res) => {
  knex("users")
    .then((areas) => res.json(areas))
    .catch((err) => console.log(err));
};

exports.getUserById = (req, res) => {
  knex("users")
    .select()
    .where({ user_id: req.params.id })
    .then((user) => {
      if (user) {
        return res.json(user);
      }
      return res.sendStatus(404);
    });
};

exports.postUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then(res.json({ message: "user was added successfully" }))
    .catch(res.sendStatus(400));
};
