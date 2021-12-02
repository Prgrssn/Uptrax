const db = require("../db");
const tableName = "areas";

const findAll = () => db(tableName);

const find = (filters) => db(tableName).where(filters);

const findOne = (filters) => db(tableName).where(filters).first();

module.exports = {
  find,
  findAll,
  findOne,
};
