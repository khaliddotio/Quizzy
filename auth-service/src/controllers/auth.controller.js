import bcrypt from "bcrypt"
import userModel from "../models/user.model.js"

export const register = async (req, res) =>{
try {
    const {name , email, password} = req.body;

    const existingUser = await UserActivation.findOne({email});

    if(existingUser){
        return res.status(400).json({
            message: "User alreadt exist"
        })
    }
    const hasedPassword = await bcrypt.hash(password, 10)

    const user = await user.create({
        name,
        email,
        password: hasedPassword
    })
    
} catch (error) {
   res.status(500).json({
    message: error.message
   })

}
}