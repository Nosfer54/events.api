var axios         = require('axios');

const auth          = require( '../conf.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

axios.get('http://localhost:1337/api', // url
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
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })