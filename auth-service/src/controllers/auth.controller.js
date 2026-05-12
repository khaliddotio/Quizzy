import {registerService,loginService} from "../services/auth.service.js";


export const register = async (req,res) => {
    try {

        const result =
            await registerService(req.body);

        res.status(201).json(result);

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};


export const Login = async (req,res) => {
    try {

        const result =
            await loginService(req.body);

        res.cookie(
            "refreshToken",
            result.refreshToken,
            {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            }
        );

        res.status(200).json({
            success: true,

            accessToken:
                result.accessToken,

            user: result.user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};