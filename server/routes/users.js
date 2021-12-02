const router = require("express").Router();
const { getUsers, getUserById, postUser } = require("../controllers/users");

router.get("/", getUsers);

router.post("/", postUser);

router.get("/:firebase_id", getUserById);

module.exports = router;
