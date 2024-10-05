
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import User from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const jwtSecret ='Y4V(xVznY(Lc@KMDR$nzJ_Cu(e56kaNn'


const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body
    console.log("username", userName, email)

    if ([email, userName, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{ userName }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or useranme already exit ")
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        userName: userName.toLowerCase(),
        email : email,
        password : encryptedPassword,
    })

    if (!user) {
        throw new ApiError(500, "something went wrong when registering the user ")
    }

    return res.status(201).json(
        new ApiResponse(200, user, "User registered successfully")
    )
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    // console.log("email", email ,password)

    if (!( email)) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({
        $or: [ { email }]
    })

    if (!user) {
        throw new ApiError(404, "user does not exist")
    }

    const data = {
        user: { id: user.id }
    }

    const authToken = jwt.sign(data, jwtSecret, { expiresIn: '1h' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { 
        throw new ApiError(401, "password is not valid ")
    }
   return res.status(200).json({ message: 'User logged successfully', success: true, authToken: authToken });
    // return res.status(200).json(
    //     new ApiResponse(200, user, "User logged in successfully")
    // )
   
})



export { registerUser , loginUser}