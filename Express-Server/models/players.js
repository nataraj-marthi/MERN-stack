const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const playerSchema = new Schema({
    id: {
        unique: true,
        required: true,
        type: Number
    },
    name: {
       type: String
    },
    country: {
        type: String
     },
     category: {
        type: String
     },
     image: {
        type: String
     }
})

module.exports = mongoose.model('players',playerSchema);