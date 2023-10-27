const express = require("express");
const routes = express.Router();
const { expressjwt: jwt } = require("express-jwt");
const verifyJwt = jwt({
  secret: process.env.JWT_SECRET_STRING,
  algorithms: ["HS256"],
});
const tableController = require("../controllers/tableController");
const adminAccess = require("../middlewares/adminUserAccess");

routes.get("/tables", verifyJwt, adminAccess, tableController.index);
routes.get("/tables:id", verifyJwt, adminAccess, tableController.show);
routes.post("/tables", verifyJwt, adminAccess, tableController.store);

module.exports = routes;
