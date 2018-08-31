var express         = require('express');
var axios           = require('axios');
var path            = require('path'); // модуль для парсинга пути
var app             = express();

const auth          = require( '../conf.js');
const apikey        = require( '../conf.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-METHODS", "GET, OPTIONS, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept, *");
    next();
});

app.get('/api', function (req, res) {
    // Disable caching for content files
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);

    axios.get('https://api.dev.kontur/events/v1/sources', // url
        {
            headers: {
                'Authorization': auth,
            },
            // `withCredentials` indicates whether or not cross-site Access-Control requests
            // should be made using credentials
            withCredentials: true // Может быть надо, а может быть нет
        } // config
    )
        .then(function (response) {
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});