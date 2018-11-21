const cors = require("../common/security/cors.security");
const diskRoutes = require('../resource/disk/disk.routing');

module.exports = (app) => {
  app.use(cors);
  app.get("/", (req, res) => res.redirect("/api-docs"));
  app.use("/api/disks", diskRoutes);
};
