const express = require(`express`);
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en puerto ${8080}`);
});

app.use(require("./src/routes/indexRoutes"));
