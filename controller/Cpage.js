const main = (req, res) => {
    res.render('main');
};
const signup = (req, res) => {
    res.render('signup');
};
const login = (req, res) => {
    res.render('login');
};
const post = (req, res) => {
    res.render('post');
};
module.exports = { main, signup, login, post };
