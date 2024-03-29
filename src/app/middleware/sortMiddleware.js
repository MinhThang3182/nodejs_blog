module.exports = function sortMiddleware(req, res, next){
    res.locals._sort = {
        enabled: false,
        type: 'default'
    }


    if(req.query.hasOwnProperty('_sort')){ // nếu có chức năng sort
        // res.locals._sort.enabled = true,
        // res.locals._sort.type = req.query.type
        // res.locals._sort.column = req.query.column

        // Như trên có thể dùng cách này để hợp nhất 2 Object
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column
        })
    }

    next()
}