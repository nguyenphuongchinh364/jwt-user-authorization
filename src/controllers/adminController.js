const User = require('../models/user'); // Thay đổi đường dẫn đến model User của bạn
const mongoose = require('mongoose');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }



        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


exports.deleteUserById = async (req, res) => {
    try {
        const userId = req.params.userId; // Lấy ID từ URL

        const isDeleted = await User.findByIdAndDelete(userId);

        if (!isDeleted) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};


