import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {

    const[date,setDate] = useState(new Date());

    const onChange = (changedDate) => {
        setDate(changedDate);
    }

    return (
        <div className="flex justify-center">
            <div className="max-w-7xl py-16 px-16 w-full">
                <h2 className="uppercase font-roboto text-gray-800 font-bold text-3xl text-center">Calendar Updates</h2>
                <div className="grid grid-cols-2 py-16 justify-items-center">
                    <div className="flex justify-center">
                        <Calendar className="w-full" value={date} onChange={() => onChange(date)} />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-800">There are no upcoming events at this time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule
