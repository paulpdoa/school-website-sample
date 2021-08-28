import React,{useState} from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { motion,useAnimation } from 'framer-motion';
// import {useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

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

    const [today] = useState(new Date().getDate());

    const onChange = (changedDate) => {
        setDate(changedDate);
    }

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
        <div className="flex justify-center">
            <div className="max-w-7xl py-16 px-16 w-full">
                <h2 className="uppercase font-roboto text-gray-800 font-bold lg:text-3xl text-2xl text-center w-full"
                // variants={titleVariant}
                // initial="hidden"
                // animate={animation}
                >Calendar Updates</h2>
                <div className="grid lg:grid-cols-2 gap-4 py-16 justify-items-center w-full">
                    <div className="flex justify-center items-center"
                    // variants={calendarVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <Calendar className="font-poppins" value={date} onChange={() => onChange(date)} />
                    </div>
                    <div className="w-full"
                    // variants={eventVariant}
                    // initial="hidden"
                    // animate={animation}
                    >
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="uppercase">Events for August</h3>
                            <div className="mt-5">
                                <span className="p-3 border-2 border-blue-800">{today}</span>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-around mt-5 border-t-2 border-gray-200">
                            <div className="mt-5 flex justify-center items-center">
                                <img className="w-20 object-cover" src="/images/talkingstudent.jpg" alt="students" />
                            </div>
                            <div className="grid grid-rows-3 justify-items-center mt-5">
                                <div>
                                    <p className="text-sm text-blue-500">9:00 AM - 12:00 PM</p>
                                </div>
                                <div>
                                    <p className="uppercase text-md text-gray-900">What experts are saying about academy camp</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700">School Announcement</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
