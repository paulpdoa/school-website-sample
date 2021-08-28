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
        <nav className={navbar ? "bg-blue-900 bg-opacity-90 flex flex-col justify-center items-center py-4 z-50 w-full fixed top-0" : "bg-blue-900 flex justify-center items-center p-5 z-50"}>
            
            <div onClick={() => setSubMenu(!subMenu)} className='flex justify-start items-center lg:hidden'> {/* Hamburger mobile menu */}
                { !subMenu ? <svg className="w-6 h-6 text-gray-100 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg> : 
                <svg className="w-6 h-6 text-gray-100 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>}
            </div>

            {subMenu ? 
            /* for mobile and tablets */
            <ul className={navbar ? 'bg-transparent w-full px-5 p-5 gap-10 text-sm text-gray-100 showMenuMobile' : 'showMenuMobile max-w-7xl lg:flex flex flex-col lg:justify-around w-full lg:px-32 text-gray-100 font-normal text-sm fixed lg:static bg-blue-900 top-72 p-5 z-50'}>
                <div className="flex flex-col gap-4">
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link className="flex flex-col relative mt-2">
                        <div className="flex">
                            <li>ABOUT US</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li><Link to='#'>History</Link></li>
                                <li><Link to='#'>Vision | Mission | Philosophy and Objectives</Link></li>
                                <li>Logo and Core Values</li>
                                <li>Our Hymn</li>
                                <li>School Recognition</li>
                                <li>Accreditation and Certification</li>
                                <li>Memberships</li>
                                <li>School Facilities</li>
                                <li>Campus Map</li>
                                <li>Organizational Chart</li>
                            </ul>
                        </div>
                        
                    </Link>
                    <Link className="flex flex-col relative">
                        <div className="flex">
                            <li>ACADEMIC OFFERINGS</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li>Pre-Elementary</li>
                                <li>Elementary</li>
                                <li>Junior High School</li>
                                <li>Senior High School</li>
                            </ul>
                        </div>
                    </Link>
                    <Link className="flex flex-col relative">
                        <div className="flex">
                            <li>ADMISSION</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li>Application Requirements and Procedure</li>
                                <li>Downloadable Forms</li>
                                <li>Online Services</li>
                            </ul>
                        </div>
                    </Link>
                    <Link className="flex flex-col relative">
                        <div className="flex">
                            <li>SERVICES</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li>Office of the Registrar</li>
                                <li>Student Services</li>
                                <li>Administration</li>
                                <li>Finance</li>
                            </ul>
                        </div>
                    </Link>
                    <Link className="flex flex-col relative">
                        <div className="flex">
                            <li>COMMUNITY</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            </div>
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li>School Board</li>
                                <li>Executive Community</li>
                                <li>Faculty and Staff</li>
                                <li>School Affairs Committee</li>
                                <li>Affiliates</li>
                            </ul>
                        </div>
                    </Link>
                    <Link className="flex flex-col relative">
                        <div className="flex">
                            <li>ALUMNI</li>
                            <svg className="w-5 lg:h-7 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="pt-2">
                            <ul className="subMenu p-2 text-blue-900 font-semibold">
                                <li>Alumni Association</li>
                                <li>Events and Activities</li>
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
                            <li><Link to='#'>History</Link></li>
                            <li><Link to='#'>Vision | Mission | Philosophy and Objectives</Link></li>
                            <li>Logo and Core Values</li>
                            <li>Our Hymn</li>
                            <li>School Recognition</li>
                            <li>Accreditation and Certification</li>
                            <li>Memberships</li>
                            <li>School Facilities</li>
                            <li>Campus Map</li>
                            <li>Organizational Chart</li>
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
                            <li>Pre-Elementary</li>
                            <li>Elementary</li>
                            <li>Junior High School</li>
                            <li>Senior High School</li>
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
                            <li>Application Requirements and Procedure</li>
                            <li>Downloadable Forms</li>
                            <li>Online Services</li>
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
                            <li>Office of the Registrar</li>
                            <li>Student Services</li>
                            <li>Administration</li>
                            <li>Finance</li>
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
                            <li>School Board</li>
                            <li>Executive Community</li>
                            <li>Faculty and Staff</li>
                            <li>School Affairs Committee</li>
                            <li>Affiliates</li>
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
                            <li>Alumni Association</li>
                            <li>Events and Activities</li>
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
