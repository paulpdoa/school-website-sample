import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import React,{ useEffect } from 'react'

// const titleVariant = {
//     hidden: {
//         y:-50,
//         opacity:0
//     },
//     visible: {
//         y:0,
//         opacity:1,
//         transition: {
//             duration:1
//         }
//     }
// }

// const cardVariant = {
//     hidden: {
//         opacity:0,
//         scale:0
//     },
//     visible: {
//         opacity:1,
//         scale:1,
//         transition: {
//             duration:1,
//             delay:0.5
//         }
//     }
// }

const Services = () => {

    // const animation = useAnimation();
    // const {ref,inView} = useInView({
    //     threshold: 0.3
    // });

    // useEffect(() => {
    //     if(inView) {
    //         animation.start('visible')
    //     } else {
    //         animation.start('hidden')
    //     }
    // })

    return (
        <div className="flex justify-center announceBg">
            <div className="max-w-7xl px-16 py-16 w-full">
                <h2 className="font-roboto text-gray-900 font-bold lg:text-3xl text-2xl text-center uppercase"
                // variants={titleVariant}
                // initial="hidden"
                // animate={animation}
                >Online Services</h2>
                <div className="text-center mt-10"
                // variants={cardVariant}
                // initial="hidden"
                // animate={animation}
                >
                    <span className="text-gray-600 font-medium">Your safety is our priority.</span>
                    <p className="text-gray-600 font-medium">APPLY, ENROLL, RESERVE, and REQUEST documents online!</p>
                    <div className="grid lg:grid-cols-4 gap-5 justify-items-center py-10">
                        <div className="service-card">
                            <svg className="service-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                            </svg>
                            <p className="font-medium text-sm">New Student Application for Admission</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="font-medium text-sm">Online Enrollment</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" /><path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                            </svg>
                            <p className="font-medium text-sm">Intent / Reservation Form for SY 2021-2022(Current Students Only)</p>
                        </div>
                        <div className="service-card">
                            <svg className="service-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" /><path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            <p className="font-medium text-sm">Online Document Requisition</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
