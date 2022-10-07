const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date().toLocaleString()}`);
    next();
  };
  
  module.exports = LoggerMiddleware;
  