const http = require("http");
const chalk = require("chalk");
const ip = require("ip");

/**
 * Endereço em qual o servidor esta escutando
 */
function onListening() {
  console.log(`
    Localhost: ${chalk.magenta(`${process.env.URL_APP}`)}
    LAN: ${chalk.magenta(`http://${ip.address()}:${process.env.PORT}`)}
    ${chalk.magenta(`Press ${chalk.italic("CTRL-C")} to stop`)}
  `);
}

/**
 * Inicializa o servidor do sistema
 * @param {Express} app aplicação do express
 */
module.exports = (app) => {
  const server = http.Server(app);
  server.listen(process.env.PORT);
  server.on("listening", onListening);
  return server;
};
