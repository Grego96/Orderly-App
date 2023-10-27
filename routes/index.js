const userRoutes = require("./userRoutes");
const tableRoutes = require("./tableRoutes");

module.exports = (app) => {
  app.use(userRoutes);
  app.use(tableRoutes);
};
