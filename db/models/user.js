const def = (db, DataTypes, options) => {
  const model = db.define("user", { caption: DataTypes.TEXT, description: DataTypes.TEXT }, options);
  return model;
};

module.exports = def;
