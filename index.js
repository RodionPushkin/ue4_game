const express =  require('express');
const cors  =  require( "cors");
const cookieParser  =  require( "cookie-parser");
const {settings}  =  require( "./config.json");
const bodyParser  =  require( "body-parser");
const helmet  =  require( "helmet");
const compression  =  require( "compression");
const fileUpload  =  require( "express-fileupload");
const limiter  =  require( "express-rate-limit");
const slowDown  =  require( "express-slow-down");
const db = require( "./database");

const app = express();

app
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(cookieParser(settings.secret))
    .use(bodyParser.json())
    .use(helmet())
    .use(limiter({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: 'Too many accounts created from this IP, please try again after an 15 min',
        standardHeaders: true,
        legacyHeaders: false,
    }))
    .use(slowDown({
        windowMs: 15 * 60 * 1000,
        delayAfter: 100,
        delayMs: 500
    }))
    .use(fileUpload({
        limits: { fileSize: 50 * 1024 * 1024 },
        abortOnLimit: true,
        useTempFiles: true,
        tempFileDir : '/tmp/'
    }))
    .use(cors(settings.cors))
    .use(compression())

app.get('/', (request, response) => {
    response.json("hello im api")
});
app.use('/static/image', express.static(__dirname + '/static/image'));
require('./routes/router.js')(app)

// start app
app.listen(settings.PORT, () => {
    console.log(`server listening on port: ${settings.PORT}`);
});
db.checkConnection()