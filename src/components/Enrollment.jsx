import {Helmet} from 'react-helmet'
import { useState,useEffect } from 'react';

const Enrollment = ({headTitle}) => {
    const [birthday,setBirthday] = useState('');
    const[age,setAge] = useState('');
    // const [first,setFirst] = useState(false);

    const [grades,setGrades] = useState([
        {level:"Grade 1"},{level:"Grade 2"},{level:"Grade 3"},
        {level:"Grade 4"},{level:"Grade 5"},{level:"Grade 6"},
        {level:"Grade 7"},{level:"Grade 8"},{level:"Grade 9"},
        {level:"Grade 10"},{level:"Grade 11"},{level:"Grade 12"},
    ]);

    useEffect(() => {
        let now = new Date().getFullYear();
        let bday = new Date(birthday).getFullYear();
        let newAge = now-bday;
        if(newAge <= 0 || isNaN(newAge)) {
            setAge('Enter your birthday');
        } else {
            setAge(newAge);
        }
    },[birthday])

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex justify-center items-center">
        <Helmet>
            <title>Enrollment | {headTitle}</title>
            <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Helmet>
            <div className="max-w-7xl lg:px-16 px-5 py-16 w-full">
                <h2 className="text-5xl font-normal select-none text-gray-900">Admission</h2>
                <form onSubmit={onSubmit} className="grid grid-rows-1 py-5">
                    <div>
                        <div className="lg:flex gap-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="firstname">First Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="middlename">Middle Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="lastname">Last Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="lg:flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="lastattendedschool">Name of School Last Attended</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="address">Grade/Level</label><br/>
                                <select className="form-input w-full" required>
                                    <option value="level" hidden>Choose grade/level</option>
                                    {grades && grades.map((grade) => (
                                        <option value="level">{grade.level}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="address">Address</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="lg:flex lg:gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="dob">Date Of Birth*</label><br/>
                                <input value={birthday} onChange={(e) => setBirthday(e.target.value)} className="form-input w-full" type="date" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="age">Age*</label><br/>
                                <input value={age} className="form-input w-full select-none" type="text" readOnly />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="age">Gender*</label><br/>
                                <div className="flex justify-center bg-gray-50 rounded-sm bg-opacity-100 p-1 text-gray-900">
                                    <div className="flex items-center w-32">
                                        <span>Male</span>
                                        <input value="Male" name="gender" className="form-input w-full" type="radio" />
                                    </div>
                                    <div className="flex items-center w-32">
                                        <span>Female</span>
                                        <input value="Female" name="gender" className="form-input w-full" type="radio" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="city">City</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="province">Province</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="postalcode">Zip Code</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="mother">Mother's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="father">Father's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="guardian">Guardian's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="mother">Mobile Number</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-900" htmlFor="father">Email Address</label><br/>
                                <input className="form-input w-full" type="email" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="bg-blue-900 w-56 text-center hover:bg-gray-100 hover:text-gray-900 transition duration-300 font-normal text-gray-100 p-2 rounded-sm">Apply Now!</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Enrollment
