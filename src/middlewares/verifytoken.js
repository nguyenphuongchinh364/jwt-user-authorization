const jwt = require("jsonwebtoken");
const config = process.env;
const User = require('../models/user');

const verifyJWT = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    user = jwt.verify(token, config.TOKEN_KEY);
    req.user;
    next();
}
module.exports = authMiddleware;
