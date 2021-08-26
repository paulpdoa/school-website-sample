import { Link } from 'react-router-dom';

const SubFooter = () => {
    return (
        <footer className="flex justify-center bg-gray-800 h-auto text-gray-100">
            <div className="max-w-7xl w-full px-16">
                <div className="lg:flex lg:justify-around grid grid-rows-4 gap-10 p-5 border-b border-gray-700 w-full items-center lg:gap-10 py-10">
                    <div className="w-32">
                        <p className="font-bold lg:p-5 p-2 text-center border-2 border-blue-900 rounded-xl">School Logo</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        <h3>Apply Online</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <h3>Contact Us Today</h3>
                    </div>
                    <div className="flex gap-2 items-center">
                        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
                        </svg>
                        <h3>Download Forms</h3>
                    </div>
                </div>

                <div className="grid lg:grid-cols-4 lg:gap-20 gap-10 py-10 w-full justify-items-center">
                    <div>
                        <h3>About Us</h3>
                        <p className="mt-3 italic text-sm text-justify font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem deleniti perspiciatis modi architecto illo est molestias amet, pariatur odio eum quisquam nobis tempora, similique iusto eaque officia soluta alias maiores.</p>

                        <div className="mt-5">
                            <h3>Follow Us</h3>
                            <div className="flex gap-5 mt-5 justify-start">
                                <Link to="#" className="fa fa-facebook text-blue-600"></Link>
                                <Link to="#" className="fa fa-instagram text-red-500"></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Testimonials</h3>
                        <div>
                            <p className="mt-3 italic text-sm text-justify font-light">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, facilis."</p>
                            <span className="text-sm font-medium">-Admin</span>
                        </div>
                        <div className="mt-7">
                            <p className="mt-3 italic text-sm text-justify font-light">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolore voluptatibus provident minus distinctio odit."</p>
                            <span className="text-sm font-medium">-Admin</span>
                        </div>
                        <div className="mt-5">
                            <h3>Our Visitors</h3>
                            <div className="text-sm mt-3">
                                <div className="flex gap-2 items-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                    <span>Users Today: 21</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <span>Total Users: 31231</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                    </svg>
                                    <span>Who's Online: 10</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Contact Info</h3>
                        <div className="mt-3 flex gap-2 text-justify">
                            <div>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3>Our Address</h3>
                                <p className="text-sm text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, corporis.</p>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-2 text-justify">
                            <div>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h3>Office Hours</h3>
                                <span className="text-sm text-gray-200">9:00 AM - 5:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Map</h3>
                        <iframe title="South Hill School Inc, Map" className="border-0 mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.519970667988!2d121.25358930643962!3d14.164295705120228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60aec9b4bd37%3A0x8d8413d1b6c1e8cc!2sSouth%20Hill%20School%20Inc.!5e0!3m2!1sen!2sph!4v1629968009126!5m2!1sen!2sph" width="300" height="300" allowFullScreen={false} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default SubFooter
