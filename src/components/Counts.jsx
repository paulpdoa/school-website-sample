import React,{ useState,useEffect } from 'react'

const Counts = () => {


    return (
        <div className="flex justify-center countsBg">
            <div className="max-w-7xl py-16 flex justify-center items-center">
                <div>
                    <h2 className="font-roboto text-gray-100 font-bold text-3xl text-center">School Sample Website</h2>
                    <div className="grid grid-cols-3 gap-10 mt-16">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counts
