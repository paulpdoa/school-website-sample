import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    // for keeping the navbar at the top upon scrolling
    const [navbar,setNavbar] = useState(false);

    window.addEventListener('scroll',() => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    })
    // for showing the sub menu
    const [subMenu,setSubMenu] = useState(false);

    return (
        <nav className={navbar ? "bg-blue-900 flex flex-col justify-center items-center py-4 z-50 w-full fixed top-0" : "bg-blue-900 flex justify-center items-center p-5 z-50"}>
            
            <div onClick={() => setSubMenu(!subMenu)} className='flex justify-start items-center bg-blue-900 lg:hidden'> {/* Hamburger mobile menu */}
                <svg className="w-6 h-6 text-gray-100 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </div>

            {subMenu ? 
            /* for mobile and tablets */
            <ul className={navbar ? 'bg-transparent w-full px-5 p-5 gap-10 text-sm text-gray-100' : 'max-w-7xl lg:flex flex flex-col lg:justify-around w-full lg:px-32 text-gray-100 font-normal text-sm fixed lg:static bg-blue-900 top-52 p-5'}>
                <div className="flex flex-col gap-4">
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link className="flex relative">
                        <li>ABOUT US</li>
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                        <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <div className="pb-5 pt-2">
                            <ul className="subMenu font-semibold text-blue-900 shadow-xl w-56 -left-5 px-5 py-5">
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
                </div>
            </ul> : 
            /* for large screen */
            <ul className="max-w-7xl lg:flex lg:justify-around hidden w-full px-32 text-gray-100 font-normal text-sm">
                <Link className="flex" to='/'>
                    <li className="w-full self-center">HOME</li>
                </Link>
                <Link className="flex relative">
                    <li className="w-full self-center">ABOUT US</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <li className="w-full self-center">ACADEMIC OFFERINGS</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <li className="w-full self-center">ADMISSION</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <li className="w-full self-center">SERVICES</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <li className="w-full self-center">COMMUNITY</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                    <li className="w-full self-center">ALUMNI</li>
                    <svg className="w-5 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
                <Link className="flex">
                    <li className="w-full self-center">RESOURCES</li>
                </Link>
            </ul>
            }
        </nav>
    )
}

export default Navbar
