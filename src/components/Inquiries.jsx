import React from 'react'

const Inquiries = () => {
    return (
        <div className="flex justify-center">
        
        {/* <div className="custom-shape-divider-bottom-1630056160">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div> */}

            <div className="max-w-7xl px-16 py-16 grid lg:grid-cols-2 gap-10 w-full text-gray-900">
                <div>
                    <h2 className="font-roboto font-bold lg:text-3xl text-2xl text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-rows-4 text-black gap-5 mt-6">
                        <div className="h-auto bg-gray-100 p-5 flex justify-between items-center">
                            <label className="font-roboto italic font-semibold" htmlFor="1">#1 Can we now enroll online thru our school's website?</label>
                            <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="h-auto bg-gray-100 p-5 flex justify-between items-center">
                            <label className="font-roboto italic font-semibold" htmlFor="1">#2 Where can I see and download our payment summary and payment schedule?</label>
                            <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="h-auto bg-gray-100 p-5 flex justify-between items-center">
                            <label className="font-roboto italic font-semibold" htmlFor="1">#3 Do we have online yearly calendar of school activities?</label>
                            <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="h-auto bg-gray-100 p-5 flex justify-between items-center">
                            <label className="font-roboto italic font-semibold" htmlFor="1">#4 Can I see my son's attendance thru this website privately?</label>
                            <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div> 
                </div>
                <div>
                    <div className="bg-gray-100 py-16 text-black">
                        <h2 className="font-roboto font-normal lg:text-3xl text-2xl text-center">Send Us Your Inquiries</h2>
                        <form className="grid lg:grid-rows-2 gap-5 justify-items-center">
                            <div className="grid lg:grid-cols-2 justify-items-center gap-4 mt-5 px-16 w-full">
                                <div className="w-full lg:w-auto">
                                    <input className="p-2 outline-none bg-gray-200 w-full" type="text" placeholder="Name" required />
                                </div>
                                <div className="w-full lg:w-auto">
                                    <input className="p-2 outline-none bg-gray-200 w-full" type="email" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="w-full px-16">
                                <div className="lg:w-auto w-full">
                                    <textarea className="p-2 outline-none w-full h-auto bg-gray-200" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <div className="flex lg:justify-end justify-center">
                                <div className="mt-1">
                                    <button className="Btn bg-blue-900 px-1 py-2 text-lg flex justify-center items-center w-40 text-gray-100">
                                        Submit
                                        <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inquiries
