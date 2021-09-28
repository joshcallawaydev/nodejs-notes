var url = 'http:mylogger,io/log'

// module events

const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // send an http request
        console.log(message);

        // raise an event
        this.emit('messageLogged', {
            id: 1,
            url: 'url'
        })
    }
}


// to export into another module, use the module.export, followed by the function name

// hiding - module.exports.log = log;

// you can also just export a function with

module.exports = Logger;