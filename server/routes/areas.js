const router = require("express").Router();
const { getAreas, getAreaById } = require("../controllers/areas");

/**
 * GET /api/v1/warehouses
 */
router.get("/", getAreas);

/**
 * GET /api/v1/warehouses/:warehouse_id
 */
router.get("/:areas_id", getAreaById);

module.exports = router;
