const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phn:{
        type:Number,
        required:true}
});
const friends = mongoose.model('friendDetails',schema);
module.exports= friends;