const requiredEnvVars = ["MONGODB_URI", "JWT_SECRET"];

const validateEnv = () => {
  const missingEnvVars = requiredEnvVars.filter(
    (envVarName) => !process.env[envVarName]
  );

  if (missingEnvVars.length) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
  }
};

module.exports = validateEnv;
