// staffRoutes.js
const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const bookController = require('../controllers/bookController')
const auth = require('../middlewares/authMiddleware')
const checkRole = require("../middlewares/checkroleMiddleware");

// crud user
router.get("/profile", auth, checkRole(1), userController.myProfile);


// crud book
router.get('/all-book', auth, checkRole(1), bookController.getAllBooks);
router.post('/create-book', auth, checkRole(1), bookController.createBook);
router.get('/get-bookId/:bookID', auth, checkRole(1), bookController.getBookById);
router.delete('/delete-book/:bookId', auth, checkRole(1), bookController.deleteBookById);
router.post('/update-book/:bookId', auth, checkRole(1), bookController.updateBookById);

router.get("/welcome", auth, checkRole(0), (req, res) => {
    res.status(200).send("Welcome staff 🙌 ");
});

module.exports = router;
