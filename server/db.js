const Sequelize = require('sequelize');

const Conn = new Sequelize(
    'graphql-mysql',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const Biodata = Conn.define('biodata', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false
    },
    alamat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    jk: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nohp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hobyId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Hoby = Conn.define('hobies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_hoby: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Relations
Hoby.hasMany(Biodata, { foreignKey: 'hobyId', sourceKey: 'id' });
Biodata.belongsTo(Hoby, { foreignKey: 'id', sourceKey: 'hobyId' });
// Biodata.hasMany(Hoby, { foreignKey: 'hobyId', sourceKey: 'id' });
// Hoby.belongsTo(Biodata, { foreignKey: 'hobyId', targetKey: 'id' });
// Biodata.belongsTo(Hoby);

module.exports = Conn;