const models = require("../db/models");

const model = models.user;

const get = (req, res) => {
  model.findAll().then((users) => {
    res.status(200).send(users);
  });
};

const post = (req, res) => {
  model.create(req.body).then((user) => {
    res.status(200).send(user);
  });
};

const del = (req, res) => {
  const { id } = req.query;
  if (id) {
    model
      .destroy({ where: { id: id } })
      .then(() => {
        res.status(200).send({ deletedId: id });
      })
      .catch((error) => {
        res.sendStatus(204);
      });
  }
};

module.exports = (route) => {
  if (route) {
    route.get("/", get);
    route.post("/", post);
    route.delete("/", del);
  }
};
