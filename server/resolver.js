const Db = require('./db');

const resolver = {
    getBiodata: function () {
        return Db.models.biodata.findAll({
            include: [{
                model: Db.models.hobies
            }]
        });
    },
    getBiodataById: function (args) {
        return Db.models.biodata.findById(args.id, {
            include: [{
                model: Db.models.hobies
            }]
        });
    },
    getHobies: function () {
        return Db.models.hobies.findAll({
            include: [{
                model: Db.models.biodata
            }]
        });
    },
    getHobiById: function (args) {
        return Db.models.hobies.findById(args.id, {
            include: [{
                model: Db.models.biodata,
                where: { hobyId: args.id }
            }]
        });
    },
    addBiodata: function (args) {
        return Db.models.biodata.create(args.biodata);
    },
    hapusBiodata: function (args) {
        return Db.models.biodata.destroy({
            where: { id: args.id }
        });
    },
    updateBiodata: function (args) {
        return Db.models.biodata.update(args.biodata, {
            where: { id: args.id }
        })
    }
}

module.exports = resolver;