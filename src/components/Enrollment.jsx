import {Helmet} from 'react-helmet'
import { useState,useEffect } from 'react';

const Enrollment = ({headTitle}) => {
    const [birthday,setBirthday] = useState('');
    const[age,setAge] = useState(0);
    // const [first,setFirst] = useState(false);

    useEffect(() => {
        let now = new Date().getFullYear();
        let bday = new Date(birthday).getFullYear();
        let newAge = now-bday;
        if(newAge <= 0 || isNaN(newAge)) {
            setAge(0);
        } else {
            setAge(newAge);
        }
    },[birthday])

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="enroll-bg flex justify-center items-center">
        <Helmet>
            <title>Enrollment | {headTitle}</title>
        </Helmet>
            <div className="max-w-7xl lg:px-16 px-5 py-16 w-full">
                <h2 className="text-5xl font-normal select-none text-gray-100">Admission</h2>
                <form onSubmit={onSubmit} className="grid grid-rows-1 py-5">
                    <div>
                        <div className="lg:flex gap-2">
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="firstname">First Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="middlename">Middle Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="lastname">Last Name*</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="lg:flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="lastattendedschool">Name of School Last Attended<span className="text-sm">(New Students Only)</span></label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="address">Address</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="lg:flex lg:gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="dob">Date Of Birth*</label><br/>
                                <input value={birthday} onChange={(e) => setBirthday(e.target.value)} className="form-input w-full" type="date" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="age">Age*</label><br/>
                                <input value={age} className="form-input w-full" type="text" readOnly />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="age">Gender*</label><br/>
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
                                <label className="text-gray-100" htmlFor="city">City</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="province">Province</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="postalcode">Postal Code</label><br/>
                                <input className="form-input w-full" type="text" required />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="mother">Mother's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="father">Father's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="guardian">Guardian's Name</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="mother">Mobile Number</label><br/>
                                <input className="form-input w-full" type="text" />
                            </div>
                            <div className="w-full">
                                <label className="text-gray-100" htmlFor="father">Email Address</label><br/>
                                <input className="form-input w-full" type="email" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="bg-blue-900 w-56 text-center hover:bg-gray-100 hover:text-gray-900 transition duration-300 font-semibold text-gray-100 p-2 rounded-sm">Apply Now!</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Enrollment
