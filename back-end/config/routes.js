const cors = require("../common/security/cors.security");

module.exports = (app) => {
  app.use(cors);
  app.get("/", (req, res) => res.send("PD Disk Catalog"));
};
