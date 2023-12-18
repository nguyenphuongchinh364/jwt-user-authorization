const User = require('../models/user');

exports.getUserById = async (req, res) => {
    try {

        const userId = req.user.user_id; // Lấy giá trị của user_id từ đối tượng decoded
        console.log(userId);
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
