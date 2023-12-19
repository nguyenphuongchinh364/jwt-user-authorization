const User = require('../models/user');
function checkRole(role) {
    return async (req, res, next) => {
        try {
            const userId = req.user.user_id
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found!' });
            }
            if (user.role === role) {
                console.log(role)
                next();
            } else {
                // Nếu không có quyền, trả về lỗi hoặc chuyển hướng đến trang không có quyền truy cập
                res.status(403).send('Bạn không có quyền truy cập.');
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        }
    }
};

module.exports = checkRole;
