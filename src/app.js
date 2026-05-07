const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const routes = require("./routes");

const app = express();
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.json({
    project: "Memoria Ancestral API",
    status: "online",
    docs: "/api-docs",
  });
});

module.exports = app;
