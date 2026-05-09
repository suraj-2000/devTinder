const adminAuth = (req,res,next)=> {
    const token = "xyz";
    const isAdminAuthorized = token === "yz";
    if(!isAdminAuthorized) {
        res.status(401).send("Access Denied!")
    }
    else {
        next();
    } 
}
module.exports = {adminAuth};