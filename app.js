function sayHello(name) {
    console.log('Hello ' + name)
}

sayHello('Josh')

// use 'node app.js' to run in node.js

// loading a module in another file, use require()

// hiding - const logger = require('./logger');

// if you are exporting just a function, remove the 'logger.'

// working with paths

const path = require('path');

var pathObj = path.parse(__filename);

// using  OS module

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// file systems

const fs = require('fs');
const files = fs.readdirSync('./')
console.log(files);

fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log("result", files)
})

// raise an event - signalling something has happened

const EventEmitter = require('events');

const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', function (arg) { //arg or e, this can be called anything...
    console.log('Listener called')
}); // register a listener for the events

logger.log('message');

// http 

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000)

console.log('Listening on port 3000')