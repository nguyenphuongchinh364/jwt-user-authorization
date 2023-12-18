require("dotenv").config();
require("./src/config/database").connect();
const express = require("express");
const app = express();




// Middleware
app.use(express.json({ limit: "50mb" }));

// Import các modules để quản lý routes và logic
const authMiddleware = require("./src/middlewares/authMiddleware");
const adminMiddleware = require("./src/middlewares/adminMiddleware");
const userController = require("./src/controllers/userController");
const adminController = require("./src/controllers/adminController");

// Routes
const userRoutes = require("./src/routers/user");
const adminRoutes = require("./src/routers/admin");
const authRoutes = require("./src/routers/auth");

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);



// Route cuối cùng xử lý khi không tìm thấy
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
