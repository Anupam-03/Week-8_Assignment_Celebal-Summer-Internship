const jwt = require('jsonwebtoken');
const secretKey = 'your_jwt_secret';

const home = (req, res) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                res.render("index", { user: null });
            } else {
                res.render("index", { user: user.username });
            }
        });
    } else {
        res.render("index", { user: null });
    }
};

module.exports = {
    home
};