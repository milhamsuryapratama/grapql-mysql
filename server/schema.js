const graphql = require('graphql');
const { buildSchema } = require("graphql");
// const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

// const Db = require('./db');

// var bio = [
//     { id: '1', nama: 'ilham', alamat: 'maron', jk: 'L', nohp: '08533015082' }
// ]

// const biodataType = new GraphQLObjectType({
//     name: 'Biodata',
//     fields: () => ({
//         id: { type: GraphQLID },
//         nama: { type: GraphQLString },
//         jk: { type: GraphQLString },
//         alamat: { type: GraphQLString },
//         nohp: { type: GraphQLString },
//         hobi: {
//             type: hobyType,
//             resolve(parent, args) {
//                 return Db.models.biodata.findById(parent.id, {
//                     include: Db.models.hobies
//                 });
//             }
//         }
//     })
// });

// const hobyType = new GraphQLObjectType({
//     name: 'Hoby',
//     fields: () => ({
//         id: { type: GraphQLID },
//         nama_hoby: { type: GraphQLString }
//     })
// })

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         biodata: {
//             type: new GraphQLList(biodataType),
//             resolve(parent, args) {
//                 return Db.models.biodata.findAll({
//                     include: Db.models.hobies
//                 });
//             }
//         },
//         biodataById: {
//             type: biodataType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Db.models.biodata.findById(args.id)
//             }
//         },
//         hoby: {
//             type: new GraphQLList(hobyType),
//             resolve(parent, args) {
//                 return Db.models.hobies.findAll();
//             }
//         }
//     }
// })

const schema = buildSchema(`

    type Biodata {
        id: Int!
        nama: String
        alamat: String
        jk: String
        nohp: String
        hobi: [Hobies]
    }

    type Hobies {
        id: Int!
        nama_hoby: String
        biodata: [Biodata]
    }

    input BiodataInput {
        nama: String
        alamat: String
        jk: String
        nohp: String
        hobyId: Int!
    }

    type Query {
        getBiodata: [Biodata]
        getBiodataById(id: Int!): Biodata
        getHobies: [Hobies]
        getHobiById(id: Int!): Hobies
    }
    
    type Mutation {
        addBiodata(biodata: BiodataInput!): Biodata
        hapusBiodata(id: Int!): Biodata
        updateBiodata(id: Int!, biodata: BiodataInput!): Biodata
    }

`);

// const resolver = {
//     biodata: function () {
//         return Db.models.biodata.findAll();
//     }
// }

module.exports = schema;
// module.exports = new GraphQLSchema({
//     query: RootQuery
// })