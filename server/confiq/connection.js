const mongoose = require('mongoose');
module.exports = async()=>{
    try{
    mongoose.connect('mongodb+srv://admin:admin@cluster0.9ghil.mongodb.net/friends?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('connected');
}
catch(err){
    console.log(err);
}}