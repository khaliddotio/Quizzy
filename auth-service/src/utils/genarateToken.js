import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const ganarateAccesToken = (user) =>{
    return jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        config.JWT_ACCESS_SECRET,
        {
            expiresIn: config.ACCESS_TOKEN_EXPIRY
        }
    )
} 

export const ganarateRefreshToken = (user) => {
 return jwt.sign(
    {
        id: user._id
    },
    config.JWT_REFRESH_SECRET,
    {
        expiresIn:config.REFRESH_TOKEN_EXPIRY
    }

 )
}