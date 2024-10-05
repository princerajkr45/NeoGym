import { Link, useNavigate } from "react-router-dom";
import LoginImage from '../assets/login.jpg'
import { useState } from "react";
import axios from "axios";

function Login() {
    // const googleAuth = () => {
    //     console.log(process.env.REACT_APP_API_URL);
    //     window.open(
    //         `${process.env.REACT_APP_API_URL}/auth/google/callback`,
    //         "_self"
    //     );
    // };

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email,
                password
            })
            console.log(response.data);
            if(response.data){
                localStorage.setItem('authToken', response.data.authToken)
                console.log(localStorage.getItem('authToken'))

            }
            alert(response.data.message)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-semibold text-gray-700 relative flex items-center justify-center mb-8">
                Log in Form
                <span className="absolute bottom-[-20px] h-1 w-96 bg-gray-700 rounded-sm"></span>
            </h1>

            <div className="flex w-[800px] h-[450px] bg-white shadow-xl rounded-[50px]">
                {/* Left Section */}
                <div className="relative flex-1.5 overflow-hidden rounded-l-[50px]">
                    <img
                        className=""
                        src={LoginImage}
                        alt="login"
                    />
                </div>

                {/* Right Section */}
                <form onSubmit={handleForm}>

                    <div className="flex-2 flex flex-col items-center justify-center pr-4">
                        <h2 className="text-2xl font-medium text-gray-700 mb-7">
                            Members Log in
                        </h2>
                        <input
                            type="text"
                            className="w-[320px] h-[35px] p-2 mb-3 border border-gray-700 rounded-md text-sm"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-[320px] h-[35px] p-2 mb-3 border border-gray-700 rounded-md text-sm"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="bg-yellow-400 text-white font-medium text-lg py-3 px-6 rounded-xl mt-4">
                            Log In
                        </button>
                        <p className="text-sm text-gray-700 my-2">or</p>
                        <button
                            className="w-[230px] h-[40px] flex items-center justify-center bg-white shadow-md text-gray-700 font-medium text-lg rounded-md mb-5 cursor-pointer"
                        // onClick={googleAuth}
                        >
                            <img
                                src="./images/google.png"
                                alt="google icon"
                                className="w-[30px] h-[30px] object-cover"
                            />
                            <span className="ml-2">Sign in with Google</span>
                        </button>
                        <p className="text-sm text-gray-700">
                            New Here?{" "}
                            <Link to="/signup" className="font-medium text-yellow-400">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
