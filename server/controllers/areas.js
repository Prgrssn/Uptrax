const knex = require("knex")(require("../knexfile").development);

exports.getAreas = (_req, res) => {
  knex("areas")
    .then((areas) => res.json(areas))
    .catch((err) => console.log(err));
};

exports.getAreaById = (req, res) => {
  knex("areas")
    .select()
    .where({ area_id: req.params.id })
    .then((area) => {
      if (area) {
        return res.json(area);
      }
      return res.sendStatus(404);
    });
};
