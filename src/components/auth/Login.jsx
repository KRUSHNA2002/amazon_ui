import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Footer/logo.png.png'
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://amazon-back-2n80.onrender.com/login', formData);
            if (response.status === 200) {

                console.log(response);
                const token = response.data.token;
                const user = response.data.user.name;
                localStorage.setItem('user', user); // Store token in local storage
                localStorage.setItem('token', token); // Store token in local storage
                navigate('/'); // Redirect to a dashboard page
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
                <div className="flex justify-center mb-2">
                    <Link to="/"><img src={Logo} alt="Amazon Logo" className="h-14" /></Link>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Email or mobile phone number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="text"
                            placeholder="Enter your email or mobile phone number"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Enter your Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your Password"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        By continuing, you agree to Amazon's
                        <Link to="#" className="text-blue-600"> Conditions of Use</Link> and{' '}
                        <Link to="#" className="text-blue-600">Privacy Notice</Link>.
                    </p>
                    <div className="mt-4 text-center">
                        <Link to="#" className="text-blue-600 text-sm">Need help?</Link>
                    </div>
                    <hr className="my-6" />
                    <div className="mt-4 text-center">
                        <Link to="#" className="text-blue-600 text-sm">Buying for work? Shop on Amazon Business</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">New to Amazon?</p>
                        <Link
                            to="/register"
                            className="border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block mt-2"
                        >
                            Create your Amazon account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
