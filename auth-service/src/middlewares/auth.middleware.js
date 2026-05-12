import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(400).json({
                message: "Unauthorized"
            });
        };
        
        const decoded = jwt.verify(token, config.JWT_ACCESS_SECRET);

        req.user(decoded)
        next()
    } catch (error) {
   return res.status(400).json({
    message: "Invalid token"
   })
    }
} 