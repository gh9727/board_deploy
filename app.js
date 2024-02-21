require('dotenv').config();
const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

// 미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

// pageRouter: http://localhost:8000/
const pageRouter = require('./routes/pageRouter');
app.use('/', pageRouter);

// crewRouter: http://localhost:8000/crew
const crewRouter = require('./routes/crewRouter');
app.use('/crew', crewRouter);

// 에러 페이지
app.get('*', (req, res) => {
    res.status(404).render('404');
});

// 서버 실행 + 첫 시작은 무조건 true 로 하기(중요)
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
