const newRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
    app.use('/news', newRouter); // newRoute la cap con cua /news
    app.use('/', siteRouter);
}

module.exports = route;
