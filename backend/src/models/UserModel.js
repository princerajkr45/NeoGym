import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
        },
    },
    {
        timestamps: true,
    }

);

const userModel = new mongoose.model("user", schema);

export default userModel;