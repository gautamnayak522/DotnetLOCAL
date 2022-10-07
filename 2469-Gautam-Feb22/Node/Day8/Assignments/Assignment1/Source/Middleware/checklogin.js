let jwt = require("jsonwebtoken");

let checklogin = (req, res, next) => {
    console.log(`ACCESSING  : ${req.url}`);
    //console.log(req.headers["token"]);

    if (req.headers["token"]) {
        jwt.verify(req.headers["token"], global.config.secretKey, { algorithms: global.config.algorithm }, (err, decoded) => {
            if (err) {
                console.log("No access : Invalid Token");
                return res.status(401).send("No access : Invalid Token")
                
            }
            if (decoded) {
                req.headers["data"] = decoded;
                next();
            }
        })
    }
    else {
        console.log("Token not provided : pls login first");
        return res.status(401).send("Token not provided : pls login first");
    }

}
module.exports = { checklogin }