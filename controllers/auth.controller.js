const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your_jwt_secret';

let users = [];

const getRegister = (req, res) => {
    res.render("register");
};

const postRegister = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (users.some(u => u.username === username)) {
            return res.render("register", { error: 'Username already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.render("register", { error: 'Error registering user' });
    }
};

const getLogin = (req, res) => {
    res.render("login");
};

const postLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.redirect('/upload');
        } else {
            res.render("login", { error: 'Invalid credentials' });
        }
    } catch (error) {
        res.render("login", { error: 'Error logging in' });
    }
};

const logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
};

module.exports = {
    getRegister,
    postRegister,
    getLogin,
    postLogin,
    logout
};