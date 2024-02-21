const ProfileModel = (sequelize, DataTypes) => {
    return sequelize.define('profile', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
    });
};

module.exports = ProfileModel;
