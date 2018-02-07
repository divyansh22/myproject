const Sequelize = require('sequelize');

const db = new Sequelize(
    'userdb',
    'userdb',
    'userdb',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)
const Users = db.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
})


db.sync()
    .then(() => console.log("Database has been synced"))
.catch((err) => console.error("Error creating database"))

exports = module.exports = {
    db,
    Users
}