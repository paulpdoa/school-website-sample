import { Link } from 'react-router-dom';
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// const videoVariant = {
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

// const welcomeVariant = {
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

const Welcome = () => {

    const animation = useAnimation();
    const {ref,inView} = useInView({
        threshold: 0.3
    });

    useEffect(() => {
        if(inView) {
            animation.start('visible')
        } else {
            animation.start('hidden')
        }
    })

    return (
        <div className="flex justify-center">
            <div ref={ref} className="max-w-7xl px-16 py-16 grid lg:grid-cols-2">
                <div className="flex items-center justify-center mt-10"
                // variants={videoVariant}
                // initial="hidden"
                // animate={animation}
                >
                <img className="lg:w-3/4 w-full hover:scale-95 shadow-xl" src="/images/videosample.png" alt="sampleimage" />
                    {/* <video className="lg:w-3/4 w-full hover:scale-95 shadow-xl" width="650" height="500" controls muted>
                        <source src="/videos/schoolkids.mp4" type="video/mp4"/>
                    </video> */}
                </div>
                <div className="text-center py-10"
                // variants={welcomeVariant}
                // initial="hidden"
                // animate={animation}
                >
                    <h2 className="lg:text-left text-center text-3xl text-gray-800 font-bold font-roboto">Welcome</h2>
                    <div className="text-center mt-4">
                        <p className="italic text-gray-700 font-light lg:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum. Quasi laudantium odio, alias neque fugiat labore nihil aut quae unde tenetur eaque magnam maiores consequuntur exercitationem doloribus corporis minus. Itaque, esse voluptatibus corporis facilis fugit ea quia quisquam sit!</p>
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
    )
}

export default Welcome
