'use strict'
const http = require('http');
const url = process.argv[2];

http.get(url, function callback(response) {

    response.setEncoding('utf-8');

    response.on('data', function (data) {
        console.log(data)
    })

    response.on('error', function (error) {
        console.log('error ' + error)
    })

})