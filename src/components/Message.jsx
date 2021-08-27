import { Link } from 'react-router-dom';
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// const imageVariant = {
//     hidden: {
//         x:-50,
//         opacity:0
//     },
//     visible: {
//         x:0,
//         opacity:1,
//         transition: {
//             duration:1
//         }
//     }
// }

// const messageVariant = {
//     hidden: {
//         x:50,
//         opacity:0
//     },
//     visible: {
//         x:0,
//         opacity:1,
//         transition: {
//             duration:1
//         }
//     }
// }

const Message = () => {

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
            {/* <div class="custom-shape-divider-bottom-1630056594">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div> */}

            <div className="max-w-7xl w-full px-16 py-16">
                <div className="py-20 lg:grid lg:grid-cols-2">   
                    <div className="flex justify-center items-center"
                    // variants={imageVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <img className="object-cover lg:w-3/4 w-full shadow-xl" src="/images/principal.png" alt="speech" />
                    </div>
                    <div className="text-center lg:py-0 py-5"
                    // variants={messageVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <h2 className="uppercase text-2xl text-gray-800 font-roboto font-bold">Sample Website Message</h2>
                        <h3 className="font-semibold text-xl text-blue-900 font-roboto">Sample <span className="text-yellow-500">Website</span></h3>
                        <p className="italic text-gray-600 font-medium mt-2">"Lorem ipsum dolor sit amet consectetur."</p>
                            <div className="text-justify mt-5">
                                <p className="font-light text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ea a eos porro quos esse veritatis ex voluptatem libero magnam vitae consequatur fuga officia, aliquam dolorum! Repellat magni iure veritatis.</p>
                                <div className="flex justify-center">
                                <div className="mt-10">
                                    <Link className="Btn bg-blue-900 px-5 py-2 text-sm flex justify-center items-center w-52 font-semibold text-gray-100" to='/history'>
                                        Read more...
                                        <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
