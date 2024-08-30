const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization; 
    const words = token.split(" "); 
    const jwtToken = words[1]; 
    try {

        const decodedValue = jwt.verify(jwtToken,JWT_SECRET);

        console.log(decodedValue.username);
        console.log(decodedValue);
        
        if (decodedValue) {
            next();
        } else {
            console.log(jwtToken);
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
    
}

module.exports = adminMiddleware;