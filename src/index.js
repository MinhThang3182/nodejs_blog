const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');

const SortMiddleware = require('./app/middleware/sortMiddleware')

const route = require('./routes'); // luôn nhận file index
const db = require('./config/db')

// Connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// Custom middlewares
app.use(SortMiddleware)

// HTML logger
// app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: require('./helpers/handlebars')
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => console.log(`App listening on http://localhost:${port}`));
