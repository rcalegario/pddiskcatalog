// const corsOptions = require("../common/security/cors.security");
const cors = require('cors')
const diskRoutes = require('../resource/disk/disk.routing');

module.exports = (app) => {
  const corsOptions = {
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  // Cors Middlewares
  app.use(cors(corsOptions));
  app.get("/", (req, res) => res.redirect("/api-docs"));
  app.use("/api/disks", diskRoutes);
};
