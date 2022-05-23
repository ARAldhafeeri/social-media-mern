const allowedOrigins =  (req, res, next)  => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
}

module.exports = allowedOrigins;