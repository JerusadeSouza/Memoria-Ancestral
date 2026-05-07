require("dotenv").config();
const app = require("./app");
const connectDatabase = require("./config/database");
const validateEnv = require("./config/env");

const PORT = process.env.PORT || 3000;

const start = async () => {
  validateEnv();
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
  });
};

start();
