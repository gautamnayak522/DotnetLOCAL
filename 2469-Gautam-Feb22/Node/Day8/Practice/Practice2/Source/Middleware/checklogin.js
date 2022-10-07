let jwt = require("jsonwebtoken");

let checklogin = (req, res, next) => {
    console.log(`ACCESSING  : ${req.url}`);
    console.log(req.headers["token"]);

    if (req.headers["token"]) {
        jwt.verify(req.headers["token"], global.config.secretKey, { algorithms: global.config.algorithm }, (err, decoded) => {
            if (err) {
                return res.status(401).send("Error occur")
            }
            if (decoded) {
                req.headers["data"] = decoded;
                next();
            }
        })
    }
    else {
        return res.status(401).send("Token not provided");
    }

}
module.exports = { checklogin }