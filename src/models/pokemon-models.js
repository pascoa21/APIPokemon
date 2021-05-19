const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type: String,
        required: [true, 'Informação obrigatória.'],
        trim: true
    },
    abilities:[{
        type: String,
    }],
    type1:{
        type: String,
        required: [true, 'Informação obrigatória.'],
    },
    type2:{
        type: String,
        
    },
    is_legendary: {
        type: Number,
        required: [true, 'Informação obrigatória.'],
        default:['0']
    }

});

module.exports = mongoose.model('Pokemon', schema);
