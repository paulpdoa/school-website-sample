import React from 'react'
import { Link } from 'react-router-dom';
const NewsEvents = () => {
    return (
        <div className="flex justify-center announceBg">
            <div className="max-w-7xl px-16 py-16 w-full"> {/* news and events */}
                   <div className="py-5">
                      <h2 className="uppercase font-roboto text-gray-800 font-bold lg:text-3xl text-2xl text-center"
                    //   variants={titleVariant}
                    //   initial="hidden"
                    //   animate={animation}
                      >News & Events</h2>
                      <div className="grid lg:grid-cols-3 gap-5 mt-10"
                    //   variants={cardVariant}
                    //   initial="hidden"
                    //   animate={animation}
                      >
                        <div className="h-auto border border-gray-200 bg-gray-50">
                            <img className="object-cover h-56 w-full" src="/images/blackboard.jpg" alt="blackboard" />
                            <div className="px-7 py-5">
                                <h2 className="font-roboto font-semibold text-gray-900 text-xl">Sample News</h2>
                                <p className="font-normal text-sm text-gray-600 w-3/4">by adminsample | Dec 10, 2020 | News & Events | 0 Comments</p>
                                <div className="text-justify mt-4">
                                    <p className="text-gray-600 text-sm font-medium">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odio natus cum quasi! Est nobis debitis blanditiis autem ad veniam. Ad laudantium exercitationem sunt tempore at optio ducimus. Earum omnis distinctio pariatur? Qui iusto assumenda rerum sit dignissimos iste magnam quidem velit ipsum laudantium, quod quis tenetur iure sint possimus!"</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto border border-gray-200 bg-gray-50">
                            <img className="object-cover h-56 w-full" src="/images/watercolor.jpg" alt="watercolor" />
                            <div className="px-7 py-5">
                                <h2 className="font-roboto font-semibold text-gray-900 text-xl">Sample News</h2>
                                <p className="font-normal text-sm text-gray-600 w-3/4">by adminsample | Dec 10, 2020 | News & Events | 0 Comments</p>
                            </div>
                        </div>
                      </div>
                        <div className="flex justify-center"
                        // variants={buttonVariant}
                        // initial="hidden"
                        // animate={animation}
                        >
                            <div className="mt-10">
                                <Link className="Btn bg-blue-900 px-5 py-2 text-sm flex justify-center items-center w-auto font-semibold text-gray-100" to='/announcements'>
                                    See All News & Events
                                    <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                   </div>
                </div>
        </div>
    )
}

export default NewsEvents
