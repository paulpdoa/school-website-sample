import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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

const calendarVariant = {
    hidden: {
        x:-50,
        opacity:0
    },
    visible: {
        x:0,
        opacity:1,
        transition: {
            duration:1
        }
    }
}

const eventVariant = {
    hidden: {
        x:50,
        opacity:0
    },
    visible: {
        x:0,
        opacity:1,
        transition: {
            duration:1
        }
    }
}

const Schedule = () => {

    const[date,setDate] = useState(new Date());

    const onChange = (changedDate) => {
        setDate(changedDate);
    }

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
            <div ref={ref} className="max-w-7xl py-16 px-16 w-full">
                <motion.h2 className="uppercase font-roboto text-gray-800 font-bold text-3xl text-center"
                variants={titleVariant}
                initial="hidden"
                animate={animation}
                >Calendar Updates</motion.h2>
                <div className="grid grid-cols-2 py-16 justify-items-center">
                    <motion.div className="flex justify-center"
                    variants={calendarVariant}
                    initial="hidden"
                    animate={animation}
                    >
                        <Calendar className="w-full" value={date} onChange={() => onChange(date)} />
                    </motion.div>
                    <motion.div className="flex justify-center items-center"
                    variants={eventVariant}
                    initial="hidden"
                    animate={animation}
                    >
                        <p className="text-gray-800">There are no upcoming events at this time.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
