import React from 'react'

const Inquiries = () => {
    return (
        <div className="flex justify-center inquiriesBg">
            <div className="max-w-7xl px-16 py-16 grid lg:grid-cols-2 gap-10 w-full text-gray-100">
                <div>
                    <h2 className="font-roboto font-bold text-3xl text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-rows-1 text-black gap-5 mt-6">
                        <div className="h-auto bg-gray-100 p-5">
                            <label className="font-roboto italic font-semibold" htmlFor="1">#1 Lorem ipsum dolor sit amet consectetur adipisicing.</label>
                            <p className="text-sm font-light text-justify mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe commodi omnis at? Perspiciatis eveniet, nesciunt, tempore natus quidem mollitia voluptatibus impedit voluptatum illo tenetur odit vero, dolorem laborum corporis praesentium eligendi debitis itaque totam cumque sunt. Maiores ratione illo voluptates, at tenetur est, fuga ipsum labore, iure sed commodi perferendis.</p>
                        </div>
                    </div> 
                </div>
                <div>
                    <div className="bg-gray-100 py-16 text-black">
                        <h2 className="font-roboto font-normal text-3xl text-center">Send Us Your Inquiries</h2>
                        <form className="grid grid-rows-2 gap-5 justify-items-center">
                            <div className="grid lg:grid-cols-2 gap-4 mt-5 px-16 w-full">
                                <div>
                                    <input className="p-2 outline-none bg-gray-200 w-full" type="text" placeholder="Name" required />
                                </div>
                                <div>
                                    <input className="p-2 outline-none bg-gray-200 w-full" type="email" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="w-full px-16">
                                <div className="w-full">
                                    <textarea className="p-2 outline-none w-full h-auto bg-gray-200" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <div className="flex justify-end w-full px-16">
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
