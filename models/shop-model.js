const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thing_schema = new Schema({ name: 'string' });  //lapsi_schema

const list_schema = new Schema({                      //vanhempi
    text: {
        type: String,
        required: true
    },
    children: [thing_schema],
    child: thing_schema
});
const list_model = new mongoose.model('note', list_schema);

module.exports = list_model;