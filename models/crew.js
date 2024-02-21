const { DataTypes } = require('sequelize');

// TIP) primarKey: foreignKey 설정을 위해 models/index.js 파일에 설정해두었음!(본 파일에는 생략가능함)
// TIP) foreiginKey는 부모 테이블의 primaryKey만 참조 가능하다!
const CrewModel = (sequelize) => {
    return sequelize.define('crew', {
        userId: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = CrewModel;
