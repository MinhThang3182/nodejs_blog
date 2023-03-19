const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../until/mongoose')

// các site nằm ngoài dâú /
class SiteController {
    // [GET] /
    index(req, res, next) {

        // Course.find({}, function (course, err) {
        //     if (!err) res.json(courses);
        //     res.status(400).json({ error: 'ERROR' })
        //   });


        Course.find({})
        .then(courses => { // chuyển Object contructor thành Object thường thông qua mutipleMongooseToObject
            res.render('home', {
                courses: mutipleMongooseToObject(courses)
            })
        })
        .catch(next);
    }


    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
