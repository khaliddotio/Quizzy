import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
         type: String,
         required: true,
         unique: true
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type:String,
            enum:["user","admin","quiz_creater"],
            default:"user"
        }
    },{
        timeStamps: true
    }
)


export default mongoose.model("User", userSchema)