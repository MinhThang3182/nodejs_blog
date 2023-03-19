const mongoose = require('mongoose');

async function connect(){
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://127.0.0.1:27017/TM_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connect Successfully!!");
    }catch(e){
        console.log("Connect Failed!!")
    }
}

module.exports = { connect }