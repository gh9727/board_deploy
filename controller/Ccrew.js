const { Crew, Profile } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // 암호화 모듈

// localhost:8000/crew/signup
const signup = async (req, res) => {
    const { userId, pw, name, age } = req.body;
    const find = await Crew.findOne({ where: { userId } });
    if (find) {
        res.json({ success: false });
    } else {
        const password = await bcrypt.hash(pw, 11);
        const crew = await Crew.create({ userId, password });
        const profile = await Profile.create({ name, age, crewId: crew.id });
        res.json({ success: true });
    }
};
// localhost:8000/crew/login
const login = async (req, res) => {
    const { userId, pw } = req.body;
    const result = await Crew.findOne({ where: { userId } });
    if (result) {
        const password = await bcrypt.compare(pw, result.password); // true or false 출력
        if (password) {
            const token = jwt.sign({ id: result.id }, process.env.SECRET, { expiresIn: '1h' });
            res.json({ success: true, token });
        } else {
            res.json({ success: false });
        }
    } else {
        res.json({ success: false });
    }
};
// localhost:8000/crew/data
const data = async (req, res) => {
    const { id } = req.user;
    const result = await Crew.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['name', 'age'] }],
    });
    console.log('result', result);
    res.json({ success: true, result });
};

module.exports = { signup, login, data };

// 비동기 처리 주의(로그인)
