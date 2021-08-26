import React,{ useState,useEffect } from 'react'
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';

const titleVariant = {
    hidden: {
        y:-50,
        opacity:0
    },
    visible: {
        y:0,
        opacity:1,
        transition: {
            duration:1
        }
    }
}

const cardVariant = {
    hidden: {
        opacity:0,
        scale:0
    },
    visible: {
        opacity:1,
        scale:1,
        transition: {
            duration:1,
            delay:0.5
        }
    }
}

const Counts = () => {

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
        <div className="flex justify-center countsBg">
            <div ref={ref} className="max-w-7xl py-16 flex justify-center items-center">
                <div>
                    <motion.h2 className="font-roboto text-gray-100 font-bold text-3xl text-center"
                    variants={titleVariant}
                    initial="hidden"
                    animate={animation}
                    >School Sample Website</motion.h2>
                    <motion.div className="grid grid-cols-3 gap-10 mt-16"
                    variants={cardVariant}
                    initial="hidden"
                    animate={animation}
                    >
                        <div className="text-gray-100 bg-gray-900 opacity-70 text-center w-72 p-2">
                            <h2 className="text-6xl font-semibold">5</h2>
                            <span className="font-roboto font-normal text-xl">Awards</span>
                        </div>
                        <div className="text-gray-100 bg-gray-900 opacity-70 text-center w-72 p-2">
                            <h2 className="text-6xl font-semibold">1</h2>
                            <span className="font-roboto font-normal text-xl">Locations</span>
                        </div>
                        <div className="text-gray-100 bg-gray-900 opacity-70 text-center w-72 p-2">
                            <h2 className="text-6xl font-semibold">75</h2>
                            <span className="font-roboto font-normal text-xl">Employess</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Counts
