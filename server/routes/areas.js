const router = require("express").Router();
const { getAreas, getAreaById } = require("../controllers/areas");

router.get("/", getAreas);

router.get("/:id", getAreaById);

module.exports = router;
