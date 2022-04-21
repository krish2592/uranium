const jwt=require('jsonwebtoken')


let checkUserTokenAuth=async function(req,res,next){
    let token =req.headers["x-auth-token"]

    if(!token) token =req.headers["X-Auth-Token"]

    if(!token) return res.send({msg:"x-auth-token is required!"})

    let decodeToken= jwt.verify(token,"Student of uranium batch" )

    if(!decodeToken) return res.send({msg:"Not a valid Token!"})
    
    next()

}

module.exports.checkUserTokenAuth=checkUserTokenAuth;