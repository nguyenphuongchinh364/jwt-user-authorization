// adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const auth = require('../middlewares/authMiddleware')
const checkAdminMiddleware = require("../middlewares/adminMiddleware");

router.get("/all-user", auth, checkAdminMiddleware, adminController.getAllUsers);
router.delete("/delete-user/:userId", auth, checkAdminMiddleware, adminController.deleteUserById);


module.exports = router;
