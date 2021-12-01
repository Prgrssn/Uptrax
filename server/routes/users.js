const router = require("express").Router();
const { getUsers, getUserById, postUser } = require("../controllers/users");

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", postUser);

module.exports = router;
