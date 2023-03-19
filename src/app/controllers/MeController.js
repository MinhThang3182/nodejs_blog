const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../until/mongoose')

// các site nằm ngoài dâú /
class MeController {

    // [GET] /me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted()]) // tìm trước đếm sau
            
            .then(([courses, deletedCount]) => // nhận 2 đối số tương ứng với 2 promise trên
                res.render('me/stored-courses',{
                    deletedCount,
                    courses: mutipleMongooseToObject(courses) 
                })
                )
            .catch(next)  

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         console.log(deletedCount)    
        //     })
        //     .catch(() => {})


        // Course.find({}) // điều kiên trong {} deleted = null or dùng thư viện mongoose-delete
        // .then(courses => res.render('me/stored-courses',{
        //     courses: mutipleMongooseToObject(courses) 
        // }))
        // .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({  }) 
        .then(courses => res.render('me/trash-courses',{
            courses: mutipleMongooseToObject(courses) 
        }))
        .catch(next)
    }
}

module.exports = new MeController();
