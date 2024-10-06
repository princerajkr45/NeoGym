import { Link, useNavigate } from "react-router-dom";
import SignInImage from '../assets/signup.jpg'
import { useState } from "react";
import axios from 'axios'

function SignIn() {
    const googleAuth = () => {
        console.log(import.meta.env.VITE_API_URL)
        window.open(`${import.meta.env.VITE_API_URL}/google/callback`, "_self");
    };


    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName, email, password)

        try {
            const api = await axios.post('http://localhost:3000/api/register', {
                userName: userName,
                email: email,
                password: password
            })
            console.log(api.response);
            alert("Data successfully sent")
            navigate('/login');
        } catch (error) {
            alert('Failed to send data. Please try again later.');
        }

    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold text-gray-700 relative flex items-center justify-center mb-8">
                Sign up Form
                <span className="absolute bottom-[-20px] h-1 w-96 bg-gray-700 rounded-sm"></span>
            </h1>

            <div className="flex justify-between w-[800px] h-[450px] bg-white shadow-xl rounded-[50px]">
                {/* Left Section */}
                <div className="relative flex-1.5 overflow-hidden rounded-l-[50px]">
                    <img
                        className=""
                        src={SignInImage}
                        alt="signup"
                    />
                </div>

                {/* Right Section */}
                <form onSubmit={handleSubmit}>

                    <div className="flex-2 flex flex-col items-center justify-center pr-4">
                        <h2 className="text-2xl font-medium text-gray-700 mb-5">
                            Create Account
                        </h2>
                        <input
                            type="text"
                            className="w-[320px] h-[35px] p-2 mb-3 border border-gray-700 rounded-md text-sm"
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-[320px] h-[35px] p-2 mb-3 border border-gray-700 rounded-md text-sm"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-[320px] h-[35px] p-2 mb-3 border border-gray-700 rounded-md text-sm"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-yellow-400 text-white font-medium text-lg py-3 px-6 rounded-xl mt-4">
                            Sign Up
                        </button>
                        <p className="text-sm text-gray-700 my-2">or</p>
                        <button
                            className="w-[230px] h-[40px] flex items-center justify-center bg-white shadow-md text-gray-700 font-medium text-lg rounded-md mb-5 cursor-pointer"
                        onClick={googleAuth}
                        >
                            <img
                                src="./images/google.png"
                                alt="google icon"
                                className="w-[30px] h-[30px] object-cover"
                            />
                            <span className="ml-2">Sign up with Google</span>
                        </button>
                        <p className="text-sm text-gray-700">
                            Already Have Account?{" "}
                            <Link to="/login" className="font-medium text-yellow-400">
                                Log In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
