const User = require('../models/user'); // Thay đổi đường dẫn đến model User của bạn

const checkAdmin = async (req, res, next) => {

    const userId = req.user.user_id
    try {
        const user = await User.findById(userId); // Tìm user bằng userId trong cơ sở dữ liệu
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        if (user.admin) { // Giả sử isAdmin là một trường trong đối tượng người dùng
            // Nếu người dùng là admin, tiếp tục thực hiện các hành động tiếp theo
            next();
        } else {
            return res.status(403).json({ message: 'Unauthorized: User is not an admin' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
module.exports = checkAdmin;