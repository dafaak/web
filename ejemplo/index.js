const http = require('http')
const hostname = ('127.0.0.1')
const port = 3000
//var pdf =require('phantom')
const server = http.createServer((req, res) => {
        res.statusCode = 200,
            res.setHeader('Content-Type', 'text/plain'),
             res.end('Hola :V')
            //res.write('<html> <head>Bienvenido</head><body></body></html>')

    }
)
server.listen(port, hostname, () => {
    console.log('server running at http://', hostname, ' port:', port)

})