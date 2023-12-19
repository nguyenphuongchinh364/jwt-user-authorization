// adminRoutes.js
const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const bookController = require('../controllers/bookController')
const auth = require('../middlewares/authMiddleware')
const checkRole = require("../middlewares/checkroleMiddleware");

// crud user
router.get("/profile", auth, checkRole(0), userController.myProfile);
router.get("/all-user", auth, checkRole(0), userController.getAllUsers);
router.delete("/delete-user/:userId", auth, checkRole(0), userController.deleteUserById);
router.post("/updaterole-user/:userId/:userRole", auth, checkRole(0), userController.updateUserRole);


// crud book
router.get('/all-book', auth, checkRole(0), bookController.getAllBooks);
router.post('/create-book', auth, checkRole(0), bookController.createBook);
router.get('/get-bookId/:bookID', auth, checkRole(0), bookController.getBookById);
router.delete('/delete-book/:bookId', auth, checkRole(0), bookController.deleteBookById);
router.post('/update-book/:bookId', auth, checkRole(0), bookController.updateBookById);



router.get("/welcome", auth, checkRole(0), (req, res) => {
    res.status(200).send("Welcome admin 🙌 ");
});

module.exports = router;
