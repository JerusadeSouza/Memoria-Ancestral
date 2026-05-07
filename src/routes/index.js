const { Router } = require("express");
const authRoutes = require("./authRoutes");

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

router.use("/auth", authRoutes);

module.exports = router;
