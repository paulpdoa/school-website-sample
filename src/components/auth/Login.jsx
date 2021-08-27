import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Login = ({headTitle}) => {

    const [pass,setPass] = useState(false);

    return (
        <div className="flex justify-center login-bg h-screen">
        <Helmet>
            <title>Login | {headTitle}</title>
        </Helmet>
            <div className="max-w-7xl flex items-center justify-center">
                <div className="bg-gray-100 h-auto rounded-lg border-2 lg:w-96 w-auto lg:border-blue-900">
                    <form className="flex justify-center items-center flex-col py-12">
                        <div className="flex flex-col">
                            <img src="/images/southill.png" alt="logo" />
                            <h1 className="text-4xl font-semibold">Login</h1>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="">Username</label><br/>
                            <input className="border p-2 rounded-lg outline-none" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="">Password</label><br/>
                            <input className="border p-2 rounded-lg outline-none" type={pass ? 'text' : 'password'} required
                             />
                             {pass ? 
                            <svg onClick={() => setPass(!pass)} className="w-6 h-6 absolute -mt-8 ml-44 text-blue-900 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                            </svg>
                             :
                            <svg onClick={() => setPass(!pass)} className="w-6 h-6 absolute -mt-8 ml-44 text-blue-900 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>}
                        </div>
                        <div className="flex justify-start items-center w-full px-20 mt-3">
                            <input type="checkbox" name="" id="" />
                            <span className="ml-2">Remember Me</span>
                        </div>
                        <div className="mt-3">
                            <button className="bg-blue-900 text-gray-100 p-1 w-36 text-center hover:bg-gray-100 border-2 border-blue-900 hover:border-blue-900 hover:text-gray-900 transition duration-300">Log In</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-sm text-gray-900 cursor-pointer">Forgot Password?</p>
                        </div>
                        <div className="mt-2">
                            <Link className="text-xs text-blue-800" to='/'>Go Back to South Hill Website</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
