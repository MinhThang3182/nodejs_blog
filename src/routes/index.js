const newRouter = require('./news');
const meRouter = require('./me');
const courseRouter = require('./courses')
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter); // newRoute la cap con cua /news
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter); // "/" phai dung o cuoi
}

module.exports = route;
