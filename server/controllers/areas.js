const User = require("../models/users");
const Area = require("../models/areas");

exports.getAreas = (_req, res) => {
  Area.findAll().then((areas) => res.json(areas));
};

exports.getAreaById = (req, res) => {
  Area.findOne({ id: req.params.area_id }).then((area) => {
    if (area) {
      return res.json(area);
    }
    return res.sendStatus(404);
  });
};
