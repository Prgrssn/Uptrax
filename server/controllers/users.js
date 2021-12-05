const knex = require("knex")(require("../knexfile").development);

exports.getUsers = (_req, res) => {
  knex("users")
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
};

exports.getUserById = (req, res) => {
  knex("users")
    .select()
    .where({ firebase_id: req.params.firebase_id })
    .then((user) => {
      if (user) {
        return res.json(user);
      }
      return res.sendStatus(404);
    });
};

exports.postUser = (req, res) => {
  const { name, firebase_id, exp, ast, bio, email } = req.body;
  const user = {
    name,
    firebase_id,
    exp,
    ast,
    bio,
    email,
    user_avatar: "/tour.jpeg",
  };

  knex("users")
    .insert(user)
    .then(res.json({ message: "user was added successfully" }))
    .catch(res.sendStatus(400));
};
