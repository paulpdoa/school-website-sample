import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header className="flex justify-center shadow-xl">
            <div className="max-w-7xl w-full">
                <div className="lg:grid lg:grid-cols-6 gap-5 justify-start py-5 lg:px-5">
                    <div className="col-span-1 flex justify-center items-center rounded-xl overflow-hidden w-full select-none"> {/* logo */}
                        {/* <p className="lg:font-bold font-semibold text-center lg:p-5 p-2 border-2 border-blue-900 rounded-xl text-gray-800">School Logo</p> */}
                        <img src="/images/southill.png" alt="schoollogo" />
                    </div>
                    <div className="lg:col-span-2 flex justify-center items-center"> {/* school name */}
                        <h2 className="lg:text-4xl text-2xl lg:text-left text-center font-semibold text-blue-900 select-none lg:-ml-10">South Hill School, Inc.</h2>
                    </div>
                    
                    <div className="col-span-2 lg:flex justify-around -ml-5 hidden"> {/* contact and location */}
                        <div className="col-span-1">
                            <svg className="w-9 h-9 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div className="col-span-2 w-full">
                        <span className="text-xs text-gray-600 self-center font-medium">+63 (123) 123-1234</span>
                            <h2 className="font-semibold text-gray-800 mt-2">Office Hours:</h2>
                            <div className="flex flex-col text-xs text-gray-600 font-medium mt-2">
                                <span>Monday to Friday</span>
                                <span>9:00 AM - 5:00 PM</span>
                            </div>
                        </div>
                        <div className="col-span-1 -ml-16">
                            <svg className="w-9 h-9 text-blue-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="col-span-2 w-full">
                            <span className="text-gray-600 text-xs font-medium">1234 Orchard Park, Laguna<br/> 4012 Ph</span>
                        </div>
                    </div>
                    <div className="lg:col-span-1 flex lg:justify-around justify-center gap-2 items-center"> {/* contact btn ang login btn */}
                        <Link to='/login' className="Btn bg-blue-900 text-gray-100 text-xs font-semibold p-2 lg:w-3/4 w-28 justify-center flex items-center">
                            LOGIN
                            <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>    
        </header>
    )
}

export default Header;