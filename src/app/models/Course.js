const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id: { type: Number },
    name: { type:String, required: true }, // bắt buộc phải nhập
    description: { type:String },
    img: { type:String },
    videoId: { type:String, required: true },
    level: { type:String},
    slug: { type: String, slug: 'name', unique: true },
},{
    _id: false,
    timestamps: true,
  }
);

// Custom query helpers
CourseSchema.query.sortable = function(req){   
    if(req.query.hasOwnProperty('_sort')){
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        
        return this.sort({ // sort method cua Mongoose
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        })
    }
    return this
}

//   Add plugin
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement)
CourseSchema.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' 
});; // Course là schema

module.exports = mongoose.model('Course', CourseSchema);