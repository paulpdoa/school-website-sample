import { Link } from 'react-router-dom';
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const fadeVariant = {
    hidden: {
        opacity:0,
        y:-50
    },
    visible: {
        opacity:1,
        y:0,
        transition: {
            duration:1
        }
    }
}

const Banner = () => {

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
        <div className="flex justify-center schoolBanner text-gray-200">
            <div ref={ref} className="max-w-7xl w-full px-16 py-16 flex justify-center items-center">
               <div className="text-center">
                <motion.h1 className="font-roboto font-bold text-5xl text-center select-none"
                variants={fadeVariant}
                initial="hidden"
                animate={animation}
                >"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem?"</motion.h1>
                <motion.p className="italic mt-4 select-none"
                variants={fadeVariant}
                initial="hidden"
                animate={animation}
                >"...Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus."</motion.p>
                    <motion.div className="flex justify-center"
                    variants={fadeVariant}
                    initial="hidden"
                    animate={animation}
                    >
                        <div className="mt-10">
                            <Link className="Btn bg-blue-900 px-5 py-3 text-lg flex justify-center items-center w-40 text-gray-100" to='/enrollment'>
                                Enroll Now
                                <svg className="w-5 h-5 arrow text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
               </div>
            </div>
        </div>
    )
}

export default Banner
