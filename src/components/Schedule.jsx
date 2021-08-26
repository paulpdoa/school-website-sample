import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { motion,useAnimation } from 'framer-motion';
import {useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

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

// const calendarVariant = {
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

// const eventVariant = {
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
            <div className="max-w-7xl py-16 px-16 w-full">
                <h2 className="uppercase font-roboto text-gray-800 font-bold text-3xl text-center w-full"
                // variants={titleVariant}
                // initial="hidden"
                // animate={animation}
                >Calendar Updates</h2>
                <div className="grid lg:grid-cols-2 gap-4 py-16 justify-items-center">
                    <div className="flex justify-center items-center"
                    // variants={calendarVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <Calendar value={date} onChange={() => onChange(date)} />
                    </div>
                    <div className="flex justify-center items-center"
                    // variants={eventVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <p className="text-gray-800">There are no upcoming events at this time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
