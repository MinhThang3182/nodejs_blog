module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject()) // chuyển Object contructor thành Object thường 
    },
    // Trường hợp chỉ có 1 doc
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
};
