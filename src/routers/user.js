const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware')

router.get('/profile', auth, userController.getUserById);

router.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});
module.exports = router;