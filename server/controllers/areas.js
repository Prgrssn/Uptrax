const User = require("../models/users");
const Area = require("../models/areas");

// CONTROLLERS HANDLE BUSINESS LOGIC ..
// It gets data from our model (our DB table), "does things to it," and
// then returns the results as an express JSON response.

// The _ means "we aren't using this param at the moment"
exports.getAreas = (_req, res) => {
  // Our model got all of our DB rows,
  // but we did the dirty work in .findAll().
  // From there, we'd return our results as a
  // json HTTP response
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
