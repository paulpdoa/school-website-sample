import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {

    return (
        <header className="flex justify-center shadow-xl">
            <div className="max-w-7xl grid grid-rows-1 w-full">
                <div className="grid grid-cols-6 py-5 px-16">
                    <div className="col-span-1 flex justify-center items-center rounded-xl overflow-hidden w-full select-none"> {/* logo */}
                        <p className="font-bold p-5 border-2 border-blue-900 rounded-xl text-gray-800">School Logo</p>
                    </div>
                    <div className="col-span-2 flex items-center"> {/* school name */}
                        <h2 className="text-4xl font-semibold text-blue-900 select-none">School Website Sample</h2>
                    </div>
                    <div className="col-span-2 flex justify-around -ml-10"> {/* contact and location */}
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
                            <span className="text-gray-600 text-xs font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repellendus!</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-around items-center"> {/* contact btn ang login btn */}
                        <Link to='/contact-us' className="Btn bg-blue-900 text-gray-100 text-xs font-semibold p-2 w-auto flex items-center">
                            CONTACT US
                            <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <Link to='/login' className="Btn bg-blue-900 text-gray-100 text-xs font-semibold p-2 w-auto flex items-center">
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