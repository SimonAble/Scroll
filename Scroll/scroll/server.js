const express = require("express"),
        bp = require("body-parser"),
        app = express(),
        db_name = "scroll",
        session = require('express-session'),
        path = require('path'),
        upload = require('./upload'),
        cors = require('cors'),
        bcrypt = require('bcryptjs'),
        port = 8888;

// Added for file upload
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.post('/upload', upload);

app.use(bp.json());
app.use(express.static( __dirname + '/client/dist/client' ));
app.use(session({
    secret: 'thisisoursupersecretkey!',
    resave: false,
    saveUninitialized: true,

    cookie: { maxAge: 1800000 }
}));

require("./server/config/mongoose")(db_name);
require("./server/config/routes")(app);

app.all('*', (req, res, next) =>{
    res.sendFile(path.resolve('./client/dist/client/index.html'));
});

app.listen(port, function() {
    console.log(`listening on port ${port}`);
});
