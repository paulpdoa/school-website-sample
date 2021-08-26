import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="bg-blue-900 flex justify-center py-4">
            <ul className="max-w-7xl flex justify-around w-full px-32 text-gray-100 font-normal text-sm">
                <Link to='/'>
                    <li>HOME</li>
                </Link>
                <Link className="flex relative">
                    <li>ABOUT US</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/about2'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                    
                </Link>
                <Link className="flex relative">
                    <li>ACADEMIC OFFERINGS</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/about2'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                </Link>
                <Link className="flex relative">
                    <li>ADMISSION</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/aboutssas'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                </Link>
                <Link className="flex relative">
                    <li>SERVICES</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/about2'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                </Link>
                <Link className="flex relative">
                    <li>COMMUNITY</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/about2'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                </Link>
                <Link className="flex relative">
                    <li>ALUMNI</li>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div className="pb-5 pt-2">
                        <ul className="subMenu font-semibold absolute text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
                            <li><Link to='/about'>About 1</Link></li>
                            <li><Link to='/about2'>About 2</Link></li>
                            <li>About 3</li>
                            <li>About 4</li>
                            <li>About 5</li>
                        </ul>
                    </div>
                </Link>
                <Link>
                    <li>RESOURCES</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
