const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bookController = require('../controllers/bookController')
const auth = require('../middlewares/authMiddleware')

router.get('/profile', auth, userController.myProfile);
router.get('/all-book', auth, bookController.getAllBooks);
router.get("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});
module.exports = router;